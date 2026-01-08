import React from "react";
import { render, screen } from "@testing-library/react";
import AgentQuizPage, { metadata } from "@/app/dashboard/AgentQuiz/page";
import AgentQuizClient from "@/app/dashboard/AgentQuiz/AgentQuizClient";

// Mock the client component so we don't render full quiz in this test
jest.mock("@/app/dashboard/AgentQuiz/AgentQuizClient", () => {
  return function MockAgentQuizClient() {
    return <div data-testid="agent-quiz-client">Mock Agent Quiz Client</div>;
  };
});

describe("AgentQuizPage Component", () => {
  test("renders the AgentQuizClient component", () => {
    render(<AgentQuizPage />);
    expect(screen.getByTestId("agent-quiz-client")).toBeInTheDocument();
  });

  test("exports correct metadata", () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toBe(
      "Agent Quiz | Friendly Voice Chat Guidelines – Driverse"
    );
    expect(metadata.description).toContain("Complete the Driverse agent quiz");
    expect(Array.isArray(metadata.keywords)).toBe(true);
    expect(metadata.alternates.canonical).toBe(
      "https://driverse.ai/dashboard/AgentQuiz"
    );
  });
});
