import { render, screen, waitFor } from "@testing-library/react";
import GmailVerify from "@/app/(whatever-path)/GmailVerify"; // adjust import
import React from "react";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => ({
    get: jest.fn((key) => {
      if (key === "token") return "sample-token";
      if (key === "email") return "sample@gmail.com";
      return null;
    }),
  }),
}));

// Mock fetch
global.fetch = jest.fn();

describe("GmailVerify Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", () => {
    render(<GmailVerify />);
    expect(screen.getByText(/Verifying\.\.\./i)).toBeInTheDocument();
  });

  it("shows success state when verification succeeds", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "OK" }),
    });

    render(<GmailVerify />);

    await waitFor(() =>
      expect(screen.getByText(/Email verified successfully!/i)).toBeInTheDocument()
    );

    expect(screen.getByText("Open The App")).toBeInTheDocument();
  });

  it("shows error state when verification fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Verification failed" }),
    });

    render(<GmailVerify />);

    await waitFor(() =>
      expect(
        screen.getByText(/Verification failed/i)
      ).toBeInTheDocument()
    );

    expect(screen.getByText("Retry Verification")).toBeInTheDocument();
  });

  it("shows error state if fetch throws", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    render(<GmailVerify />);

    await waitFor(() =>
      expect(
        screen.getByText(/An error occurred while verifying your email/i)
      ).toBeInTheDocument()
    );
  });

  it("shows invalid link if token/email missing", async () => {
    // override search params to simulate missing data
    jest.mock("next/navigation", () => ({
      useRouter: () => ({ push: jest.fn() }),
      useSearchParams: () => ({
        get: () => null, // always return null
      }),
    }));

    render(<GmailVerify />);

    await waitFor(() =>
      expect(
        screen.getByText(/Invalid verification link/i)
      ).toBeInTheDocument()
    );
  });
});
