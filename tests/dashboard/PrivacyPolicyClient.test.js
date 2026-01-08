import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PrivacyPolicyClient from "@/app/dashboard/PrivacyPolicy/PrivacyPolicyClient";

describe("PrivacyPolicyClient Component", () => {
  beforeAll(() => {
    // Mock scrollIntoView to avoid errors in JSDOM
    Element.prototype.scrollIntoView = jest.fn();
  });

  test("renders title correctly", () => {
    render(<PrivacyPolicyClient />);
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  });

  test("renders last updated date", () => {
    render(<PrivacyPolicyClient />);
    expect(screen.getByText(/Last Updated: February 27, 2025/i)).toBeInTheDocument();
  });

  test("contains content sections", () => {
    render(<PrivacyPolicyClient />);
    expect(screen.getByText(/Introduction/i)).toBeInTheDocument();
    expect(screen.getByText(/Information We Collect/i)).toBeInTheDocument();
    expect(screen.getByText(/How We Use Your Information/i)).toBeInTheDocument();
  });

  test("desktop navigation menu exists", () => {
    render(<PrivacyPolicyClient />);
    const toc = screen.getByText(/Contents/i);
    expect(toc).toBeInTheDocument();
  });

  test("desktop TOC links do not cause crash on click", () => {
    render(<PrivacyPolicyClient />);

    const introLink = screen.getAllByText(/Introduction/i)[0]; // first one in TOC
    expect(() => fireEvent.click(introLink)).not.toThrow();
  });

  test("mobile accordion opens and closes sections", () => {
    // Force mobile mode by mocking matchMedia
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query.includes("max-width"),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));

    render(<PrivacyPolicyClient />);

    const introButton = screen.getAllByText(/Introduction/i)[0];

    // Initially content should not be visible
    expect(screen.queryByText(/Welcome to Driverse/i)).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(introButton);
    expect(screen.getByText(/Welcome to Driverse/i)).toBeInTheDocument();

    // Click again to collapse
    fireEvent.click(introButton);
    expect(screen.queryByText(/Welcome to Driverse/i)).not.toBeInTheDocument();
  });
});
