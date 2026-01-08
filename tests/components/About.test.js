import { render, screen, fireEvent } from "@testing-library/react";
import About from "@/app/components/About"; // adjust path
import React from "react";

// mock next/navigation
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

// mock framer-motion to remove animations in testing env
jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      div: React.forwardRef((props, ref) => (
        <div ref={ref} {...props} />
      )),
      h1: React.forwardRef((props, ref) => (
        <h1 ref={ref} {...props} />
      )),
      p: React.forwardRef((props, ref) => (
        <p ref={ref} {...props} />
      )),
      button: React.forwardRef((props, ref) => (
        <button ref={ref} {...props} />
      )),
    },
  };
});

describe("About Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders heading", () => {
    render(<About />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  test("renders description paragraph", () => {
    render(<About />);

    expect(
      screen.getByText(/At Driverse.Ai, we are revolutionizing/i)
    ).toBeInTheDocument();
  });

  test("renders Know More button", () => {
    render(<About />);

    expect(screen.getByRole("button", { name: /Know More/i })).toBeInTheDocument();
  });

  test("clicking Know More triggers router.push", () => {
    render(<About />);

    const btn = screen.getByRole("button", { name: /Know More/i });
    fireEvent.click(btn);

    expect(pushMock).toHaveBeenCalledWith("/dashboard/About");
  });

  test("renders about image", () => {
    render(<About />);

    const img = screen.getByAltText("Driverse AI");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toBe("/about.gif");
  });
});
