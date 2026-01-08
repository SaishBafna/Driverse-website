import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MechanicClient from "@/app/dashboard/Mechanic/MechanicClient";
import axios from "axios";
import { toast } from "sonner";

// Mock axios and toast
jest.mock("axios");
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock FloatingInput since it's UI-only
jest.mock("@/app/Components/FloatingInput", () => (props) => (
  <input {...props} data-testid={props.name} />
));

describe("MechanicClient Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders heading correctly", () => {
    render(<MechanicClient />);
    expect(screen.getByText(/for mechanic/i)).toBeInTheDocument();
  });

  test("shows validation errors for empty submit", async () => {
    render(<MechanicClient />);
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(await screen.findByText(/username is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/invalid email address/i)).toBeInTheDocument();
    expect(await screen.findByText(/valid phone number/i)).toBeInTheDocument();
    expect(await screen.findByText(/company address is required/i)).toBeInTheDocument();
    // No password validation here until length mismatch
  });

  test("validates incorrect email", async () => {
    render(<MechanicClient />);

    fireEvent.change(screen.getByTestId("email"), { target: { value: "abc@xyz" } });
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(await screen.findByText(/invalid email address/i)).toBeInTheDocument();
  });

  test("validates incorrect phone number", async () => {
    render(<MechanicClient />);

    fireEvent.change(screen.getByTestId("phone"), { target: { value: "12345" } });
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(await screen.findByText(/valid phone number/i)).toBeInTheDocument();
  });

  test("validates password mismatch", async () => {
    render(<MechanicClient />);

    fireEvent.change(screen.getByTestId("password"), { target: { value: "pass1234" } });
    fireEvent.change(screen.getByTestId("confirmPassword"), { target: { value: "pass12345" } });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(await screen.findByText(/passwords do not match/i)).toBeInTheDocument();
  });

  test("handles successful submit", async () => {
    axios.post.mockResolvedValue({ status: 201 });

    render(<MechanicClient />);

    fireEvent.change(screen.getByTestId("username"), { target: { value: "John" } });
    fireEvent.change(screen.getByTestId("email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByTestId("phone"), { target: { value: "+12345678901" } });
    fireEvent.change(screen.getByTestId("companyAddress"), { target: { value: "Toronto" } });
    fireEvent.change(screen.getByTestId("password"), { target: { value: "password123" } });
    fireEvent.change(screen.getByTestId("confirmPassword"), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("/api/registerUser", expect.any(Object));
      expect(toast.success).toHaveBeenCalledWith("Verify Your Email!");
    });
  });

  test("handles server error properly", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Server Error" } },
    });

    render(<MechanicClient />);

    fireEvent.change(screen.getByTestId("username"), { target: { value: "John" } });
    fireEvent.change(screen.getByTestId("email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByTestId("phone"), { target: { value: "+12345678901" } });
    fireEvent.change(screen.getByTestId("companyAddress"), { target: { value: "Toronto" } });
    fireEvent.change(screen.getByTestId("password"), { target: { value: "password123" } });
    fireEvent.change(screen.getByTestId("confirmPassword"), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Server Error");
    });
  });
});
