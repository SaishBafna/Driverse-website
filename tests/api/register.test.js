import { POST } from "@/app/api/register/route";
import User from "@/app/lib/RegistrationModel";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

process.env.FRONTEND_URL = "http://localhost:3000";

jest.mock("nodemailer");

describe("POST /api/register", () => {
  let mongo;

  beforeAll(async () => {
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongo.stop();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it("should return 400 if required fields are missing", async () => {
    const request = {
      json: async () => ({
        email: "test@gmail.com",
        password: "123456",
      }),
    };

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Required fields are missing");
  });

  it("should return 400 if passwords mismatch", async () => {
    const request = {
      json: async () => ({
        serviceType: "driver",
        username: "Test",
        phone: "9999999999",
        email: "test@gmail.com",
        password: "1234",
        confirmPassword: "5678",
      }),
    };

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Passwords do not match");
  });

  it("should register user and send email", async () => {
    const request = {
      json: async () => ({
        serviceType: "driver",
        username: "Test",
        phone: "9999999999",
        email: "test@gmail.com",
        companyAddress: "Address",
        password: "123456",
        confirmPassword: "123456",
      }),
    };

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.message).toBe(
      "Registration successful. Verification email sent."
    );

    const user = await User.findOne({ email: "test@gmail.com" });
    expect(user).not.toBeNull();
    expect(user.verificationToken).toBeDefined();
  });
});
