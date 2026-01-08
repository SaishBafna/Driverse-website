import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AgentTrainingClient from "@/app/dashboard/AgentTraining/AgentTrainingClient";
import { useRouter } from "next/navigation";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock Modal to avoid real DOM portal behavior
jest.mock("react-modal", () => {
  return ({ isOpen, children }) => (isOpen ? <div>{children}</div> : null);
});

describe("AgentTrainingClient Component", () => {
  let pushMock;

  beforeEach(() => {
    pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });
  });

  test("renders component correctly", () => {
    render(<AgentTrainingClient />);
    expect(screen.getByText("Agent Communication Training")).toBeInTheDocument();
    expect(screen.getByText("Your Training Module")).toBeInTheDocument();
  });

  test("opens language modal on Start Training", () => {
    render(<AgentTrainingClient />);

    fireEvent.click(screen.getByText("Start Training"));

    expect(screen.getByText("Select Training Language")).toBeInTheDocument();
  });

  test("opens video modal when selecting English", () => {
    render(<AgentTrainingClient />);

    fireEvent.click(screen.getByText("Start Training"));
    fireEvent.click(screen.getByText("English"));

    expect(screen.getByText(/COMMUNICATION PROTOCOL/i)).toBeInTheDocument();
    expect(screen.getByText(/ENGLISH/i)).toBeInTheDocument();
    expect(screen.getByText("Complete Training")).toBeInTheDocument();
  });

  test("navigates to quiz after completing training", () => {
    render(<AgentTrainingClient />);

    fireEvent.click(screen.getByText("Start Training"));
    fireEvent.click(screen.getByText("English"));

    fireEvent.click(screen.getByText("Complete Training"));

    expect(pushMock).toHaveBeenCalledWith("/dashboard/AgentQuiz");
  });
});
