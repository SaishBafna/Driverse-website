import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer"; // <- adjust path
import React from "react";

// Mock Driverselogo to avoid SVG/icon issues
jest.mock("@/app/components/ui/Driverselogo", () => () => (
  <div data-testid="driverselogo" />
));

describe("Footer Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Services section", () => {
    render(<Footer />);

    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Drivers")).toBeInTheDocument();
    expect(screen.getByText("Carriers")).toBeInTheDocument();
    expect(screen.getByText("Towing Companies")).toBeInTheDocument();
    expect(screen.getByText("Mechanic")).toBeInTheDocument();
  });

  test("renders Useful Links section", () => {
    render(<Footer />);

    expect(screen.getByText("Useful Links")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Why Choose Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });

  test("renders About Us section with Driverselogo", () => {
    render(<Footer />);

    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByTestId("driverselogo")).toBeInTheDocument();
    expect(
      screen.getByText(/Connecting Tow Trucking Companies/i)
    ).toBeInTheDocument();
  });

  test("renders social media icons with correct href", () => {
    render(<Footer />);

    const facebook = screen.getByRole("link", {
      name: "",
      hidden: true,
    });

    const links = [
      {
        href: "https://www.facebook.com/share/16rCabmHjZ/?mibextid=wwXIfr",
      },
      {
        href: "https://www.linkedin.com/company/driverse-inc/",
      },
      {
        href: "https://x.com/driverseai?s=11",
      },
      {
        href: "https://www.tiktok.com/@driverse.ai?_r=1&_t=ZS-92dhZKxxtEz",
      },
      {
        href: "https://www.instagram.com/driverse.ai?igsh=MXcycGRzcjM4M3BkcQ==",
      },
    ];

    const anchors = screen.getAllByRole("link");

    links.forEach((link) => {
      const found = anchors.find((a) => a.getAttribute("href") === link.href);
      expect(found).toBeTruthy();
      expect(found).toHaveAttribute("target", "_blank");
      expect(found).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  test("renders App Store & Google Play buttons", () => {
    render(<Footer />);

    expect(screen.getAllByText("Download on the")).toHaveLength(2);
    expect(screen.getByText("App Store")).toBeInTheDocument();
    expect(screen.getByText("Google Play")).toBeInTheDocument();
  });

  test("renders correct copyright text", () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(screen.getByText(`© Copyright ${year}`)).toBeInTheDocument();
    expect(screen.getByText("Driverse")).toBeInTheDocument();
  });
});
