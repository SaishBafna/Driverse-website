/**
 * @file __tests__/verifyEmail.test.js
 */
import { POST } from "@/app/api/verifyEmail/route"; // adjust path if needed
import User from "@/app/lib/RegistrationModel";
import { connectToDb } from "@/app/lib/db";

jest.mock("@/app/lib/db", () => ({
  connectToDb: jest.fn(),
}));

jest.mock("@/app/lib/RegistrationModel", () => ({
  findOne: jest.fn(),
  updateOne: jest.fn(),
}));

// Mock nodemailer
jest.mock("nodemailer", () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue(true),
  }),
}));

process.env.FRONTEND_URL = "http://localhost:3000";
process.env.EMAIL_USER = "test@gmail.com";
process.env.EMAIL_PASS = "password";

describe("POST /api/verifyEmail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockRequest = (bodyObj) => ({
    json: async () => bodyObj,
  });

  it("should return 400 if body JSON is invalid", async () => {
    const badReq = {
      json: () => {
        throw new Error("Invalid JSON");
      },
    };

    const response = await POST(badReq);
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toBe("Invalid JSON format in request body");
  });

  it("should return 400 if email is missing", async () => {
    const response = await POST(mockRequest({}));
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toBe("Email parameter is required");
  });

  it("should return 404 if user does not exist", async () => {
    User.findOne.mockResolvedValue(null);

    const response = await POST(
      mockRequest({ email: "notfound@example.com" })
    );
    const result = await response.json();

    expect(connectToDb).toHaveBeenCalled();
    expect(response.status).toBe(404);
    expect(result.exists).toBe(false);
  });

  it("should update token & send mail if user exists", async () => {
    User.findOne.mockResolvedValue({ email: "user@example.com" });
    User.updateOne.mockResolvedValue({ modifiedCount: 1 });

    const response = await POST(
      mockRequest({ email: "user@example.com" })
    );
    const result = await response.json();

    expect(connectToDb).toHaveBeenCalled();
    expect(User.findOne).toHaveBeenCalledWith(
      { email: "user@example.com" },
      expect.any(Object)
    );

    expect(User.updateOne).toHaveBeenCalled();
    expect(result.exists).toBe(true);
    expect(result.success).toBe(true);
    expect(response.status).toBe(200);
    expect(result.message).toBe("Verification email sent successfully");
  });

  it("should return 500 on unexpected errors", async () => {
    User.findOne.mockRejectedValue(new Error("DB failure"));

    const response = await POST(mockRequest({ email: "test@mail.com" }));
    const result = await response.json();

    expect(response.status).toBe(500);
    expect(result.error).toBe("DB failure");
  });
});
