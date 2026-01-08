import { render, screen, fireEvent } from "@testing-library/react";
import Features from "@/app/components/Features"; // <-- adjust path
import React from "react";

// Mock next/navigation
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

// Mock framer-motion to remove animations
jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      div: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
      h1: React.forwardRef((props, ref) => <h1 ref={ref} {...props} />),
      p: React.forwardRef((props, ref) => <p ref={ref} {...props} />),
      button: React.forwardRef((props, ref) => <button ref={ref} {...props} />),
      img: React.forwardRef((props, ref) => <img ref={ref} {...props} />),
    },
  };
});

describe("Features Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders heading text", () => {
    render(<Features />);
    expect(screen.getByText("Why Choose Driverse?")).toBeInTheDocument();
  });

  test("renders description paragraph", () => {
    render(<Features />);
    expect(
      screen.getByText(/we are dedicated to transforming the transportation/i)
    ).toBeInTheDocument();
  });

  test("renders Know More button", () => {
    render(<Features />);
    expect(screen.getByRole("button", { name: /Know More/i })).toBeInTheDocument();
  });

  test("clicking Know More triggers router.push", () => {
    render(<Features />);
    const btn = screen.getByRole("button", { name: /Know More/i });
    fireEvent.click(btn);

    expect(pushMock).toHaveBeenCalledWith("/dashboard/chosse-us");
  });

  test("renders main image", () => {
    render(<Features />);
    const img = screen.getByAltText("Driverse AI");

    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe("/que.png");
  });

  test("has container div with id attribute", () => {
    render(<Features />);
    expect(screen.getByRole("region", { hidden: true })).toBeTruthy();
  });
});
