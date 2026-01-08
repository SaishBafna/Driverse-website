import React from "react";
import { render, screen } from "@testing-library/react";
import ChooseUsClient from "@/app/dashboard/ChooseUs/ChooseUsClient";

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => {
  return {
    motion: {
      div: ({ children }) => <div>{children}</div>,
    },
  };
});

describe("ChooseUsClient Component", () => {
  test("renders without crashing", () => {
    render(<ChooseUsClient />);
    // Basic smoke test
    expect(true).toBe(true);
  });

  test("renders the hero video element", () => {
    render(<ChooseUsClient />);
    const videoElement = screen.getByRole("video", { hidden: true }) || document.querySelector("video");
    expect(videoElement).toBeInTheDocument();
  });

  test("renders main section titles", () => {
    render(<ChooseUsClient />);

    expect(
      screen.getByText("Comprehensive Connectivity")
    ).toBeInTheDocument();
    expect(
      screen.getByText("User-Friendly Interface")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Real-Time Availability")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Enhanced Driver Engagement")
    ).toBeInTheDocument();
  });

  test("renders image elements", () => {
    render(<ChooseUsClient />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
});
