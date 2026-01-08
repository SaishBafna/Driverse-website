import { render, screen } from "@testing-library/react";
import AboutClient from "@/app/components/AboutClient"; // adjust path
import React from "react";

// Mock framer-motion for test stability
jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      div: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
    }
  };
});

describe("AboutClient Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders video section with source", () => {
    render(<AboutClient />);

    const video = screen.getByTestId("about-video");
    expect(video).toBeInTheDocument();

    const source = screen.getByTestId("about-video-source");
    expect(source).toHaveAttribute("src", "/assets/mechanic_working.mp4");
    expect(source).toHaveAttribute("type", "video/mp4");
  });

  test("renders Mission section text", () => {
    render(<AboutClient />);

    expect(screen.getByText("Driverse Mission")).toBeInTheDocument();
    expect(
      screen.getByText(/Our mission is to create a dynamic platform/i)
    ).toBeInTheDocument();
  });

  test("renders Mission image with correct attributes", () => {
    render(<AboutClient />);

    const img = screen.getByAltText("Driverse AI");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe("/assets/9.png");
  });

  test("renders Vision section text", () => {
    render(<AboutClient />);

    expect(screen.getByText("Driverse Vision")).toBeInTheDocument();
    expect(
      screen.getByText(/We envision a transportation industry/i)
    ).toBeInTheDocument();
  });

  test("renders Vision section image", () => {
    render(<AboutClient />);

    const images = screen.getAllByAltText("Driverse AI"); // 2 images share same alt
    expect(images.length).toBeGreaterThanOrEqual(2);

    // The second image is Vision
    expect(images[1].getAttribute("src")).toBe("/assets/8.png");
  });

  test("contains fallback text for unsupported browsers", () => {
    render(<AboutClient />);

    expect(
      screen.getByText("Your browser does not support the video tag.")
    ).toBeInTheDocument();
  });
});
