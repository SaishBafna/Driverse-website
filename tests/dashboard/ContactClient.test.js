import React from "react";
import { render, screen } from "@testing-library/react";
import ContactClient from "@/app/dashboard/contact/ContactClient";

// Mock react-icons to avoid rendering SVG complexity
jest.mock("react-icons/fa", () => ({
  FaPhoneAlt: () => <span>PhoneIcon</span>,
  FaRegAddressCard: () => <span>AddressIcon</span>,
  FaFacebook: () => <span>FacebookIcon</span>,
  FaLinkedin: () => <span>LinkedinIcon</span>,
  FaTwitter: () => <span>TwitterIcon</span>,
  FaTiktok: () => <span>TiktokIcon</span>,
  FaInstagram: () => <span>InstagramIcon</span>,
}));
jest.mock("react-icons/md", () => ({
  MdOutlineMailOutline: () => <span>EmailIcon</span>,
}));

describe("ContactClient Component", () => {
  test("renders without crashing", () => {
    render(<ContactClient />);
    expect(true).toBe(true);
  });

  test("displays Contact Us heading", () => {
    render(<ContactClient />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  test("renders email link", () => {
    render(<ContactClient />);
    const emailLink = screen.getByRole("link", { name: /query@driverse\.ai/i });
    expect(emailLink).toHaveAttribute("href", "mailto:Query@driverse.ai");
  });

  test("renders phone numbers as tel links", () => {
    render(<ContactClient />);
    const phone1 = screen.getByRole("link", { name: /\+16479996451/i });
    const phone2 = screen.getByRole("link", { name: /\+15873935200/i });

    expect(phone1).toHaveAttribute("href", "tel:+16479996451");
    expect(phone2).toHaveAttribute("href", "tel:+15873935200");
  });

  test("renders addresses", () => {
    render(<ContactClient />);
    expect(
      screen.getByText(/Mississauga \(dixie road\), Canada/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/500 4th Avenue SW/i)
    ).toBeInTheDocument();
  });

  test("renders social media links", () => {
    render(<ContactClient />);

    const fb = screen.getByRole("link", { name: /FacebookIcon/i });
    const li = screen.getByRole("link", { name: /LinkedinIcon/i });
    const tw = screen.getByRole("link", { name: /TwitterIcon/i });
    const tt = screen.getByRole("link", { name: /TiktokIcon/i });
    const ig = screen.getByRole("link", { name: /InstagramIcon/i });

    expect(fb).toHaveAttribute("href", expect.stringContaining("facebook"));
    expect(li).toHaveAttribute("href", expect.stringContaining("linkedin"));
    expect(tw).toHaveAttribute("href", expect.stringContaining("x.com"));
    expect(tt).toHaveAttribute("href", expect.stringContaining("tiktok"));
    expect(ig).toHaveAttribute("href", expect.stringContaining("instagram"));
  });

  test("renders Google Maps iframe", () => {
    render(<ContactClient />);
    const iframe = screen.getByTitle(/google maps/i) || document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
  });
});
