import React from "react";
import { render, screen } from "@testing-library/react";
import AgentTrainingPage, { metadata } from "@/app/dashboard/AgentTraining/page";
import AgentTrainingClient from "@/app/dashboard/AgentTraining/AgentTrainingClient";

// Mock the AgentTrainingClient to avoid rendering full implementation
jest.mock("@/app/dashboard/AgentTraining/AgentTrainingClient", () => {
  return function MockAgentTrainingClient() {
    return <div data-testid="agent-training-client">Mock Agent Training Client</div>;
  };
});

describe("AgentTrainingPage Component", () => {
  test("renders AgentTrainingClient component", () => {
    render(<AgentTrainingPage />);
    expect(screen.getByTestId("agent-training-client")).toBeInTheDocument();
  });

  test("exports correct metadata", () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toBe(
      "Agent Training | Communication Guidelines – Driverse"
    );
    expect(metadata.description).toContain("Complete the Driverse agent training");
    expect(Array.isArray(metadata.keywords)).toBe(true);
    expect(metadata.alternates.canonical).toBe(
      "https://driverse.ai/dashboard/AgentTraining"
    );
  });
});
