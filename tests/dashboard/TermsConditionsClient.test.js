import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TermsConditionsClient from "./TermsConditionsClient";

describe("TermsConditionsClient Component", () => {
  test("renders without crashing", () => {
    render(<TermsConditionsClient />);
    expect(screen.getByText(/Terms & Conditions/i)).toBeInTheDocument();
  });

  test("renders all section titles in desktop view", () => {
    render(<TermsConditionsClient />);

    const sectionTitles = [
      "Introduction",
      "Eligibility",
      "User Accounts",
      "Platform Services",
      "Payments & Transactions",
      "User Responsibilities & Conduct",
      "Call Recording & Communication",
      "Account Suspension & Termination",
      "Disclaimers",
      "Changes to Terms",
      "Contact Information",
    ];

    sectionTitles.forEach((title) => {
      expect(screen.getAllByText(title)[0]).toBeInTheDocument();
    });
  });

  test("mobile accordion opens and closes sections", () => {
    render(<TermsConditionsClient />);

    const introButton = screen.getAllByText("Introduction")[0];

    // Click to open
    fireEvent.click(introButton);
    expect(
      screen.getByText(/These Terms & Conditions/i)
    ).toBeInTheDocument();

    // Click to close
    fireEvent.click(introButton);
    expect(
      screen.queryByText(/These Terms & Conditions/i)
    ).not.toBeInTheDocument();
  });
});
