/**
 * @jest-environment node
 */

import { POST } from "@/app/api/sendVerificationEmail/route";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

jest.mock("nodemailer");
jest.mock("jsonwebtoken");

describe("POST /sendVerificationEmail", () => {
  const mockSendMail = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    // mocking transport return
    nodemailer.createTransport.mockReturnValue({
      sendMail: mockSendMail,
    });

    // mock envs
    process.env.JWT_SECRET = "test_secret";
    process.env.EMAIL_USER = "test@mail.com";
    process.env.EMAIL_PASS = "password123";
    process.env.NEXT_PUBLIC_BASE_URL = "https://driverse.ai";
  });

  const mockReq = (body) =>
    new Request("http://localhost/api", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

  test("returns 400 if email or userId missing", async () => {
    const response = await POST(mockReq({ email: "" }));
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toBe("Email and User ID are required");
  });

  test("sends verification email successfully", async () => {
    const token = "signed_jwt_token";
    jwt.sign.mockReturnValue(token);

    const response = await POST(
      mockReq({ email: "test@example.com", userId: "12345" })
    );
    const result = await response.json();

    expect(jwt.sign).toHaveBeenCalledWith(
      { userId: "12345", email: "test@example.com" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const expectedUrl = `https://driverse.ai/Components/GmailVerify?token=${token}`;

    expect(mockSendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: "query@driverse.ai",
        to: "test@example.com",
        subject: "Verify your emails",
        html: expect.stringContaining(expectedUrl),
      })
    );

    expect(result.message).toBe("Verification email sent");
  });

  test("returns 500 on sendMail failure", async () => {
    jwt.sign.mockReturnValue("bad_token");
    mockSendMail.mockRejectedValue(new Error("SMTP failure"));

    const response = await POST(
      mockReq({ email: "test@example.com", userId: "12345" })
    );
    const result = await response.json();

    expect(response.status).toBe(500);
    expect(result.error).toBe("Error sending email");
  });
});
