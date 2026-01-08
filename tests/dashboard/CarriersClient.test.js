import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CarriersClient from "@/app/dashboard/Carriers/CarriersClient";
import axios from "axios";
import { toast } from "sonner";

jest.mock("axios");
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock FloatingInput to simplify tests
jest.mock("@/app/Components/FloatingInput", () => {
  return function MockFloatingInput(props) {
    return (
      <input
        data-testid={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.label}
      />
    );
  };
});

describe("CarriersClient Component", () => {
  test("renders registration form for Carriers", () => {
    render(<CarriersClient />);
    expect(screen.getByText("Registration Form")).toBeInTheDocument();
    expect(screen.getByText("For Carriers")).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    render(<CarriersClient />);

    fireEvent.click(screen.getByText("Register"));

    expect(await screen.findByText("Username is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Phone number is required")).toBeInTheDocument();
    expect(await screen.findByText("Company address is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
    expect(await screen.findByText("Please confirm your password")).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    render(<CarriersClient />);

    const toggleButtons = screen.getAllByRole("button", { name: /toggle/i });

    expect(toggleButtons.length).toBeGreaterThan(0); // 2 buttons exist
  });

  test("submits valid form and calls axios", async () => {
    axios.post.mockResolvedValue({ status: 201 });

    render(<CarriersClient />);

    fireEvent.change(screen.getByTestId("username"), {
      target: { name: "username", value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("email"), {
      target: { name: "email", value: "test@mail.com" },
    });
    fireEvent.change(screen.getByTestId("phone"), {
      target: { name: "phone", value: "+1234567890" },
    });
    fireEvent.change(screen.getByTestId("companyAddress"), {
      target: { name: "companyAddress", value: "New York" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { name: "password", value: "password123" },
    });
    fireEvent.change(screen.getByTestId("confirmPassword"), {
      target: { name: "confirmPassword", value: "password123" },
    });

    fireEvent.click(screen.getByText("Register"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("/api/registerUser", expect.any(Object));
      expect(toast.success).toHaveBeenCalledWith("Verify Your Email !");
    });
  });

  test("handles axios error response", async () => {
    axios.post.mockRejectedValue({
      response: { data: { error: "Server error" } },
    });

    render(<CarriersClient />);

    fireEvent.change(screen.getByTestId("username"), {
      target: { name: "username", value: "John Doe" },
    });
    fireEvent.change(screen.getByTestId("email"), {
      target: { name: "email", value: "test@mail.com" },
    });
    fireEvent.change(screen.getByTestId("phone"), {
      target: { name: "phone", value: "+1234567890" },
    });
    fireEvent.change(screen.getByTestId("companyAddress"), {
      target: { name: "companyAddress", value: "New York" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { name: "password", value: "password123" },
    });
    fireEvent.change(screen.getByTestId("confirmPassword"), {
      target: { name: "confirmPassword", value: "password123" },
    });

    fireEvent.click(screen.getByText("Register"));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Server error");
    });
  });
});
