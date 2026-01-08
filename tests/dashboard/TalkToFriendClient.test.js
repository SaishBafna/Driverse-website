import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TalkToFriendClient from "@/app/dashboard/TalkToFriend/TalkToFriendClient";
import { useRouter } from "next/navigation";

// Mock Next router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("TalkToFriendClient Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
  });

  test("renders main heading", () => {
    render(<TalkToFriendClient />);
    expect(
      screen.getByText(/Earn with Driverse – Talk to Friend/i)
    ).toBeInTheDocument();
  });

  test("renders intro text", () => {
    render(<TalkToFriendClient />);
    expect(
      screen.getByText(/Turn Conversations into Earnings!/i)
    ).toBeInTheDocument();
  });

  test("renders 'What is Talk to Friend' section", () => {
    render(<TalkToFriendClient />);
    expect(screen.getByText(/What is Talk to Friend/i)).toBeInTheDocument();
    expect(
      screen.getByText(/voice-based support feature/i)
    ).toBeInTheDocument();
  });

  test("renders 'How Does It Work' section", () => {
    render(<TalkToFriendClient />);
    expect(screen.getByText(/How Does It Work/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Drivers top up their accounts to access this feature/i)
    ).toBeInTheDocument();
  });

  test("renders 'Why Join as an Agent' section", () => {
    render(<TalkToFriendClient />);
    expect(screen.getByText(/Why Join as an Agent/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Flexible timing — take calls when you’re free/i)
    ).toBeInTheDocument();
  });

  test("CTA button navigates to agent registration", () => {
    render(<TalkToFriendClient />);
    const button = screen.getByRole("button", { name: /Join as an Agent Now/i });

    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/dashboard/Agent");
  });
});
