import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/app/components/Navbar"; // adjust path
import React from "react";

// Mocks
const pushMock = jest.fn();
let pathnameMock = "/";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
  usePathname: () => pathnameMock,
}));

// mock framer-motion for test stability
jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      div: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
    },
    AnimatePresence: ({ children }) => <div>{children}</div>,
  };
});

// mock Driverselogo
jest.mock("@/app/components/ui/Driverselogo", () => () => (
  <div data-testid="driverselogo" />
));

describe("Navbar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    pathnameMock = "/";
  });

  test("renders navbar and menu items", () => {
    render(<Navbar />);

    expect(screen.getByTestId("driverselogo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Earn With Driverse")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("highlights active link based on pathname", () => {
    pathnameMock = "/dashboard/services";
    render(<Navbar />);

    const activeItem = screen.getByText("Services");
    expect(activeItem.className).toMatch(/border-b-4/);
  });

  test("clicking desktop nav items triggers router.push", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByText("Services"));
    expect(pushMock).toHaveBeenCalledWith("/dashboard/services");
  });

  test("shows mobile download button & toggle icon", () => {
    render(<Navbar />);

    expect(screen.getByText("Download App")).toBeInTheDocument();

    const toggleButton = screen.getByRole("button", { name: "" });
    expect(toggleButton).toBeInTheDocument();
  });

  test("opens and closes mobile menu", () => {
    render(<Navbar />);

    // open menu
    const toggleButton = screen.getByRole("button", { name: "" });
    fireEvent.click(toggleButton);

    expect(screen.getByText("Earn With Driverse")).toBeInTheDocument();

    // close via toggle
    fireEvent.click(toggleButton);
    // Expect menu to not render anymore
  });

  test("clicking mobile menu items pushes route & closes menu", () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole("button", { name: "" });
    fireEvent.click(toggleButton);

    fireEvent.click(screen.getByText("Contact"));
    expect(pushMock).toHaveBeenCalledWith("/dashboard/contact");
  });

  test("adds shadow on scroll", () => {
    render(<Navbar />);

    const nav = screen.getByRole("navigation");

    expect(nav.className).not.toMatch(/shadow-md/);

    // simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 50 } });

    // manually trigger scroll listener
    window.dispatchEvent(new Event("scroll"));

    expect(nav.className).toMatch(/shadow-md/);
  });
});
