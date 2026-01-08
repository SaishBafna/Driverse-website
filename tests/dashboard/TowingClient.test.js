import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import TowingClient from "@/app/dashboard/Towing/TowingClient";
import axios from "axios";
import { toast } from "sonner";

// Mock axios & toast
jest.mock("axios");
jest.mock("sonner", () => ({
  toast: { success: jest.fn(), error: jest.fn() },
}));

describe("TowingClient Component", () => {
  const fillValidForm = () => {
    fireEvent.change(screen.getByLabelText(/User Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "+12345678901" },
    });
    fireEvent.change(screen.getByLabelText(/Company Address/i), {
      target: { value: "Toronto, Canada" },
    });
    fireEvent.change(screen.getByLabelText(/^Password$/i), {
      target: { value: "12345678" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "12345678" },
    });
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders form heading", () => {
    render(<TowingClient />);
    expect(screen.getByText(/Registration Form/i)).toBeInTheDocument();
    expect(screen.getByText(/For Towing/i)).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    render(<TowingClient />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Register/i }));
    });

    expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
  });

  test("submits successfully with valid data", async () => {
    axios.post.mockResolvedValue({ status: 201 });

    render(<TowingClient />);
    fillValidForm();

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Register/i }));
    });

    expect(axios.post).toHaveBeenCalledWith("/api/registerUser", expect.any(Object));
    expect(toast.success).toHaveBeenCalledWith("Verify Your Email!");
  });

  test("shows error toast if API fails", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Server error" } },
    });

    render(<TowingClient />);
    fillValidForm();

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Register/i }));
    });

    expect(toast.error).toHaveBeenCalledWith("Server error");
  });

  test("toggles password visibility", () => {
    render(<TowingClient />);

    const toggleButtons = screen.getAllByRole("button");

    // First toggle controls password input
    fireEvent.click(toggleButtons[0]);
    const passwordInput = screen.getByLabelText(/^Password$/i);
    expect(passwordInput.type).toBe("text");

    // Second toggle controls confirm password
    fireEvent.click(toggleButtons[1]);
    const confirmInput = screen.getByLabelText(/Confirm Password/i);
    expect(confirmInput.type).toBe("text");
  });
});
