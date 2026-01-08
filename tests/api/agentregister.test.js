/**
 * @jest-environment node
 */

import { POST } from "@/app/api/register/route"; 
import User from "@/app/lib/RegistrationModel";
import { connectToDb } from "@/app/lib/db";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// ==== MOCKS ==== //
jest.mock("@/app/lib/db");
jest.mock("@/app/lib/RegistrationModel");
jest.mock("nodemailer");

const mockSendMail = jest.fn();
nodemailer.createTransport.mockReturnValue({ sendMail: mockSendMail });

// Helper to simulate NextRequest
function mockRequest(body) {
  return {
    json: async () => body
  };
}

describe("POST /api/register", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fails when required fields are missing", async () => {
    const req = mockRequest({ username: "Test" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Required fields are missing");
  });

  test("fails when passwords do not match", async () => {
    const req = mockRequest({
      serviceType: "agent",
      username: "Test",
      phone: "9999999999",
      email: "test@test.com",
      password: "123",
      confirmPassword: "321",
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Passwords do not match");
  });

  test("fails when email already exists", async () => {
    User.findOne.mockResolvedValueOnce({ email: "test@test.com" }); // email exists
    User.findOne.mockResolvedValueOnce(null); // phone check

    const req = mockRequest({
      serviceType: "agent",
      username: "Test",
      phone: "9999999999",
      email: "test@test.com",
      password: "123",
      confirmPassword: "123",
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("User with this email already exists");
  });

  test("fails when phone already exists", async () => {
    User.findOne.mockResolvedValueOnce(null); // email check
    User.findOne.mockResolvedValueOnce({ phone: "9999999999" }); // phone exists

    const req = mockRequest({
      serviceType: "agent",
      username: "Test",
      phone: "9999999999",
      email: "test@test.com",
      password: "123",
      confirmPassword: "123",
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("User with this phone number already exists");
  });

  test("successfully registers user & sends email", async () => {
    User.findOne.mockResolvedValueOnce(null); // email
    User.findOne.mockResolvedValueOnce(null); // phone

    const saveMock = jest.fn();
    User.mockImplementation(() => ({ save: saveMock }));

    const req = mockRequest({
      serviceType: "agent",
      username: "Test",
      phone: "9999999999",
      email: "test@test.com",
      password: "123",
      confirmPassword: "123",
    });

    const res = await POST(req);
    const json = await res.json();

    expect(connectToDb).toHaveBeenCalled();
    expect(saveMock).toHaveBeenCalled();
    expect(mockSendMail).toHaveBeenCalled();

    expect(res.status).toBe(201);
    expect(json.message).toBe(
      "Registration successful. Training information sent to your email."
    );
  });
});
