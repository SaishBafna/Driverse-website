import React from "react";
import { render, screen } from "@testing-library/react";
import CarriersPage, { metadata } from "@/app/dashboard/carriers/page";
import CarriersClient from "@/app/dashboard/carriers/CarriersClient";

// Mock CarriersClient to avoid rendering full form
jest.mock("@/app/dashboard/carriers/CarriersClient", () => {
  return function MockCarriersClient() {
    return <div data-testid="carriers-client">Mock Carriers Client</div>;
  };
});

describe("CarriersPage Component", () => {
  test("renders CarriersClient component", () => {
    render(<CarriersPage />);
    expect(screen.getByTestId("carriers-client")).toBeInTheDocument();
  });

  test("exports correct metadata", () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toBe(
      "Carrier Registration | Grow Your Business – Driverse"
    );
    expect(metadata.description).toContain(
      "Register as a carrier on Driverse"
    );
    expect(Array.isArray(metadata.keywords)).toBe(true);
    expect(metadata.alternates.canonical).toBe(
      "https://driverse.ai/dashboard/carriers"
    );
  });
});
