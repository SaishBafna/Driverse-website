import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DriverClient from "@/app/dashboard/Driver/DriverClient";

// Mock axios & toast
jest.mock("axios");
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

// Mock FloatingInput to simplify testing
jest.mock("@/app/Components/FloatingInput", () => (props) => (
  <input {...props} data-testid={props.name} />
));

describe("DriverClient Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders registration heading & form", () => {
    render(<DriverClient />);

    expect(
      screen.getByRole("heading", { name: /registration form/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/for driver/i)).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    render(<DriverClient />);

    const submitBtn = screen.getByRole("button", { name: /register/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Username is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Phone number is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Company address is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
  });

  test("validates incorrect email format", async () => {
    render(<DriverClient />);

    fireEvent.change(screen.getByTestId("email"), { target: { value: "test@" } });

    const submitBtn = screen.getByRole("button", { name: /register/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Invalid email address/i)).toBeInTheDocument();
  });

  test("validates phone number format", async () => {
    render(<DriverClient />);

    fireEvent.change(screen.getByTestId("phone"), { target: { value: "345678" } });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(await screen.findByText(/valid phone number/i)).toBeInTheDocument();
  });

  test("validates password mismatch", async () => {
    render(<DriverClient />);

    fireEvent.change(screen.getByTestId("password"), { target: { value: "password123" } });
    fireEvent.change(screen.getByTestId("confirmPassword"), { target: { value: "different" } });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(await screen.findByText(/Passwords do not match/i)).toBeInTheDocument();
  });

  test("submits form when fields are valid", async () => {
    const axios = require("axios");
    const { toast } = require("sonner");

    axios.post.mockResolvedValue({ status: 201 });

    render(<DriverClient />);

    fireEvent.change(screen.getByTestId("username"), { target: { value: "John" } });
    fireEvent.change(screen.getByTestId("email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByTestId("phone"), { target: { value: "+12345678901" } });
    fireEvent.change(screen.getByTestId("companyAddress"), { target: { value: "Toronto" } });
    fireEvent.change(screen.getByTestId("password"), { target: { value: "password123" } });
    fireEvent.change(screen.getByTestId("confirmPassword"), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("/api/registerUser", expect.any(Object));
      expect(toast.success).toHaveBeenCalledWith("Verify Your Email !");
    });
  });

  test("handles submission error properly", async () => {
    const axios = require("axios");
    const { toast } = require("sonner");

    axios.post.mockRejectedValue({ response: { data: { error: "Failed" } } });

    render(<DriverClient />);

    fireEvent.change(screen.getByTestId("username"), { target: { value: "John" } });
    fireEvent.change(screen.getByTestId("email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByTestId("phone"), { target: { value: "+12345678901" } });
    fireEvent.change(screen.getByTestId("companyAddress"), { target: { value: "Toronto" } });
    fireEvent.change(screen.getByTestId("password"), { target: { value: "password123" } });
    fireEvent.change(screen.getByTestId("confirmPassword"), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Failed");
    });
  });
});
