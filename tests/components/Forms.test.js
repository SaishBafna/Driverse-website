import { render, screen, fireEvent } from "@testing-library/react";
import Forms from "@/app/components/Forms"; // adjust path
import React from "react";

// Mock useRouter
const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

describe("Forms Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const cards = [
    { label: "Driver", route: "/dashboard/Driver" },
    { label: "Mechanic", route: "/dashboard/Mechanic" },
    { label: "Carriers", route: "/dashboard/Carriers" },
    { label: "Towing", route: "/dashboard/Towing" },
    { label: "Agent", route: "/dashboard/Agent" },
  ];

  test("renders all cards with correct titles", () => {
    render(<Forms />);

    cards.forEach((card) => {
      expect(screen.getByText(card.label)).toBeInTheDocument();
    });
  });

  test("clicking on card wrapper triggers correct navigation", () => {
    render(<Forms />);

    cards.forEach((card) => {
      const element = screen.getByText(card.label);
      fireEvent.click(element.closest("div")); // click container div
      expect(pushMock).toHaveBeenCalledWith(card.route);
    });
  });

  test("clicking arrow icon triggers same navigation", () => {
    render(<Forms />);

    const arrowIcons = screen.getAllByRole("img", { hidden: true });

    // We assume order of icons matches cards order
    arrowIcons.forEach((icon, index) => {
      fireEvent.click(icon.closest("div"));
      expect(pushMock).toHaveBeenCalledWith(cards[index].route);
    });
  });

  test("renders all benefit checkmarks under each card", () => {
    render(<Forms />);

    cards.forEach((card) => {
      const title = screen.getByText(card.label);
      const container = title.closest("div");

      // ensure at least 3 bullet points exist for each card
      const bulletItems = container.querySelectorAll("h1");
      expect(bulletItems.length).toBeGreaterThan(2);
    });
  });
});
