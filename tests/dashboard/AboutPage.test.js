import AboutPage, { metadata } from "@/app/dashboard/about/page"; // adjust path
import AboutClient from "@/app/dashboard/about/AboutClient";
import { render, screen } from "@testing-library/react";
import React from "react";

// Mock AboutClient to avoid rendering complexity
jest.mock("@/app/dashboard/about/AboutClient", () => () => (
  <div data-testid="about-client" />
));

describe("AboutPage", () => {
  test("exports correct metadata", () => {
    expect(metadata).toEqual({
      title: "About Driverse | Truck Drivers, Mechanics & Towing Platform",
      description:
        "Driverse.ai connects truck drivers with mechanics, towing services, and carriers while offering voice and chat communication to stay connected on the road.",
      keywords: [
        "about driverse",
        "truck driver platform",
        "mechanic services",
        "towing services",
        "driver communication app",
        "voice chat for drivers",
      ],
      alternates: {
        canonical: "https://driverse.ai/dashboard/about",
      },
    });
  });

  test("renders AboutClient component", () => {
    render(<AboutPage />);

    expect(screen.getByTestId("about-client")).toBeInTheDocument();
  });
});
