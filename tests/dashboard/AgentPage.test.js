import AgentPage, { metadata } from "@/app/dashboard/Agent/page"; // adjust path
import AgentClient from "@/app/dashboard/Agent/AgentClient";
import { render, screen } from "@testing-library/react";
import React from "react";

// Mock AgentClient
jest.mock("@/app/dashboard/Agent/AgentClient", () => () => (
  <div data-testid="agent-client" />
));

describe("AgentPage Component", () => {
  test("exports correct metadata", () => {
    expect(metadata).toEqual({
      title: "Join as an Agent | Friendly Voice Chat – Driverse",
      description:
        "Join Driverse.ai as an agent and earn by having friendly voice and chat conversations with drivers. Flexible timing, simple signup—register now!",
      keywords: [
        "agent registration",
        "earn by talking",
        "voice chat agent",
        "friendly conversation agent",
        "driverse agent signup",
        "talk to friend agent",
      ],
      alternates: {
        canonical: "https://driverse.ai/dashboard/Agent",
      },
    });
  });

  test("renders AgentClient component", () => {
    render(<AgentPage />);
    expect(screen.getByTestId("agent-client")).toBeInTheDocument();
  });
});
