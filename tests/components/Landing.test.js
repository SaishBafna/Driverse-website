import { render, screen } from "@testing-library/react";
import Landing from "@/app/components/Landing"; // adjust path
import React from "react";

describe("Landing Component", () => {
  test("renders without crashing", () => {
    render(<Landing />);
  });

  test("renders video element", () => {
    render(<Landing />);

    const video = screen.getByTestId("landing-video");
    expect(video).toBeInTheDocument();
  });

  test("renders video source correctly", () => {
    render(<Landing />);

    const source = screen.getByTestId("landing-video-source");
    expect(source).toHaveAttribute("src", "/assets/landing_video.mp4");
    expect(source).toHaveAttribute("type", "video/mp4");
  });

  test("sets correct video attributes", () => {
    render(<Landing />);

    const video = screen.getByTestId("landing-video");
    expect(video).toHaveAttribute("playsInline");
    expect(video).toHaveAttribute("autoPlay");
    expect(video).toHaveAttribute("muted");
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("preload", "auto");
    expect(video).not.toHaveAttribute("controls");
  });

  test("renders fallback text for unsupported browsers", () => {
    render(<Landing />);
    expect(
      screen.getByText("Your browser does not support the video tag.")
    ).toBeInTheDocument();
  });
});
