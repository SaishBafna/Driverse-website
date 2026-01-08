/**
 * @jest-environment node
 */

import { POST } from "@/app/api/check-email/route";
import { connectToDb } from "@/app/lib/db";
import User from "@/app/lib/RegistrationModel";
import { NextResponse } from "next/server";

// Mock dependencies
jest.mock("@/app/lib/db");
jest.mock("@/app/lib/RegistrationModel");

// Helper to simulate NextRequest
function mockRequest(body) {
  return {
    json: async () => body
  };
}

describe("POST /api/check-email", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns 400 if email is missing", async () => {
    const req = mockRequest({});
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(400);
    expect(json.error).toBe("Email parameter is required");
  });

  test("returns 404 if email not found", async () => {
    User.findOne.mockResolvedValueOnce(null); // No user found

    const req = mockRequest({ email: "test@test.com" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(404);
    expect(json.exists).toBe(false);
    expect(json.message).toBe("Email not found in our system");
  });

  test("returns 403 if email exists and is verified", async () => {
    User.findOne.mockResolvedValueOnce({
      email: "test@test.com",
      isVerified: true
    });

    const req = mockRequest({ email: "test@test.com" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(403);
    expect(json.exists).toBe(true);
    expect(json.isVerified).toBe(true);
    expect(json.message).toBe("Email is already verified");
  });

  test("returns 200 if email exists and is not verified", async () => {
    User.findOne.mockResolvedValueOnce({
      email: "test@test.com",
      isVerified: false
    });

    const req = mockRequest({ email: "test@test.com" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json.exists).toBe(true);
    expect(json.email).toBe("test@test.com");
  });

  test("returns 500 on internal server error", async () => {
    User.findOne.mockRejectedValueOnce(new Error("DB error"));

    const req = mockRequest({ email: "test@test.com" });
    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json.error).toBe("Internal server error");
  });
});
