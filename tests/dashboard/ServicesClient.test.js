import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ServicesClient from "@/app/dashboard/services/ServicesClient";
import { useRouter } from "next/navigation";

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ServicesClient Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
  });

  test("renders main heading", () => {
    render(<ServicesClient />);
    expect(
      screen.getByText(/Connecting Tow Trucking Companies, Mechanics, Carriers, and Drivers/i)
    ).toBeInTheDocument();
  });

  test("renders driver section with button", () => {
    render(<ServicesClient />);
    expect(screen.getByText(/For Driver:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Register Now/i })).toBeInTheDocument();
  });

  test("renders mechanic section", () => {
    render(<ServicesClient />);
    expect(screen.getByText(/For Mechanics:/i)).toBeInTheDocument();
  });

  test("renders carriers section", () => {
    render(<ServicesClient />);
    expect(screen.getByText(/For Carriers:/i)).toBeInTheDocument();
  });

  test("renders towing section", () => {
    render(<ServicesClient />);
    expect(screen.getByText(/For Tow Trucking companies:/i)).toBeInTheDocument();
  });

  test("driver register button navigates correctly", () => {
    render(<ServicesClient />);

    const button = screen.getAllByText(/Register Now/i)[0];
    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/dashboard/Driver");
  });

  test("mechanic register button navigates correctly", () => {
    render(<ServicesClient />);

    const mechanicButton = screen.getAllByText(/Register Now/i)[1];
    fireEvent.click(mechanicButton);

    expect(mockPush).toHaveBeenCalledWith("/dashboard/Mechanic");
  });

  test("carriers register button navigates correctly", () => {
    render(<ServicesClient />);

    const carriersButton = screen.getAllByText(/Register Now/i)[2];
    fireEvent.click(carriersButton);

    expect(mockPush).toHaveBeenCalledWith("/dashboard/Carriers");
  });

  test("towing register button navigates correctly", () => {
    render(<ServicesClient />);

    const towingButton = screen.getAllByText(/Register Now/i)[3];
    fireEvent.click(towingButton);

    expect(mockPush).toHaveBeenCalledWith("/dashboard/Towing");
  });

  test("renders service GIF image", () => {
    render(<ServicesClient />);
    const image = screen.getByAltText("GIF");
    expect(image).toBeInTheDocument();
  });
});
