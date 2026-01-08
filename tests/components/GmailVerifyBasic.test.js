import { render, screen, waitFor } from "@testing-library/react";
import GmailVerify from "@/app/components/GmailVerify"; // adjust path
import React from "react";

// Mock next/navigation
const pushMock = jest.fn();
const searchParamsMock = new Map();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
  useSearchParams: () => ({
    get: (key) => searchParamsMock.get(key),
  }),
}));

// Mock fetch globally
global.fetch = jest.fn();

describe("GmailVerify Component (Basic)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    searchParamsMock.clear();
  });

  it("shows loading initially", () => {
    render(<GmailVerify />);
    expect(screen.getByText("Verifying...")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("handles missing query parameters", async () => {
    render(<GmailVerify />);

    await waitFor(() =>
      expect(screen.getByText("Invalid verification link.")).toBeInTheDocument()
    );

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("handles successful verification", async () => {
    searchParamsMock.set("token", "abc123");
    searchParamsMock.set("email", "test@mail.com");

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "ok" }),
    });

    render(<GmailVerify />);

    await waitFor(() =>
      expect(
        screen.getByText("Email verified successfully! Redirecting...")
      ).toBeInTheDocument()
    );
  });

  it("handles verification failure from backend", async () => {
    searchParamsMock.set("token", "abc123");
    searchParamsMock.set("email", "test@mail.com");

    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Verification failed" }),
    });

    render(<GmailVerify />);

    await waitFor(() =>
      expect(screen.getByText("Verification failed")).toBeInTheDocument()
    );
  });

  it("handles fetch/network error", async () => {
    searchParamsMock.set("token", "abc123");
    searchParamsMock.set("email", "test@mail.com");

    fetch.mockRejectedValueOnce(new Error("Network error"));

    render(<GmailVerify />);

    await waitFor(() =>
      expect(
        screen.getByText(
          /An error occurred while verifying your email/i
        )
      ).toBeInTheDocument()
    );
  });

  it("triggers redirect after success", async () => {
    jest.useFakeTimers();

    searchParamsMock.set("token", "abc123");
    searchParamsMock.set("email", "test@mail.com");

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "ok" }),
    });

    render(<GmailVerify />);

    await waitFor(() =>
      expect(
        screen.getByText("Email verified successfully! Redirecting...")
      ).toBeInTheDocument()
    );

    // Fast-forward timers
    jest.advanceTimersByTime(3000);

    expect(pushMock).toHaveBeenCalledWith("/");
    jest.useRealTimers();
  });
});
