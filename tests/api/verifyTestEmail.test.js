/**
 * @jest-environment node
 */

import { GET } from "@/app/api/verifyEmail/route";
import { NextResponse } from "next/server";
import User from "@/app/lib/RegistrationModel";
import { connectToDb } from "@/app/lib/db";
import nodemailer from "nodemailer";

jest.mock("@/app/lib/db");
jest.mock("@/app/lib/RegistrationModel");
jest.mock("nodemailer");

describe("GET /api/verifyEmail", () => {
  const mockSendMail = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    nodemailer.createTransport.mockReturnValue({ sendMail: mockSendMail });
  });

  const mockRequest = (query) =>
    new Request(`http://localhost/api?${new URLSearchParams(query).toString()}`);

  test("returns 400 when token/email missing", async () => {
    const response = await GET(mockRequest({}));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Invalid or missing token/email");
  });

  test("returns 400 when user not found", async () => {
    connectToDb.mockResolvedValue(true);
    User.findOne.mockResolvedValue(null);

    const response = await GET(mockRequest({ token: "abc", email: "x@test.com" }));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("User not found");
  });

  test("returns 400 when token expired", async () => {
    connectToDb.mockResolvedValue(true);
    User.findOne.mockResolvedValue({
      verificationTokenExpiry: new Date(Date.now() - 10000),
    });

    const response = await GET(mockRequest({ token: "abc", email: "x@test.com" }));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Verification token has expired.");
  });

  test("verifies user & sends welcome email", async () => {
    connectToDb.mockResolvedValue(true);

    const saveMock = jest.fn();
    const user = {
      email: "x@test.com",
      username: "John",
      verificationTokenExpiry: new Date(Date.now() + 10000),
      save: saveMock,
    };

    User.findOne.mockResolvedValue(user);

    const response = await GET(
      mockRequest({ token: "abc123", email: "x@test.com" })
    );

    const body = await response.json();

    expect(connectToDb).toHaveBeenCalled();
    expect(User.findOne).toHaveBeenCalledWith({ email: "x@test.com" });

    expect(user.isVerified).toBe(true);
    expect(user.verificationToken).toBeUndefined();
    expect(user.verificationTokenExpiry).toBeUndefined();
    expect(saveMock).toHaveBeenCalled();

    expect(mockSendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "x@test.com",
        subject: expect.any(String),
        html: expect.any(String),
      })
    );

    expect(response.status).toBe(200);
    expect(body.message).toBe(
      "Email verified successfully & welcome email sent"
    );
  });
});
