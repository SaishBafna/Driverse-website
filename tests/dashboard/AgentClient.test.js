import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AgentClient from "@/app/components/AgentClient"; // adjust path
import axios from "axios";
import React from "react";
import { toast } from "sonner";

// Mock axios
jest.mock("axios");

// Mock toast
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock FloatingInput
jest.mock("@/app/Components/FloatingInput", () => (props) => (
  <input data-testid={props.name} {...props} onChange={props.onChange} />
));

// Mock framer-motion
jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      div: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
    },
  };
});

describe("AgentClient Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const fillForm = () => {
    fireEvent.change(screen.getByTestId("username"), {
      target: { name: "username", value: "John" },
    });
    fireEvent.change(screen.getByTestId("email"), {
      target: { name: "email", value: "john@mail.com" },
    });
    fireEvent.change(screen.getByTestId("phone"), {
      target: { name: "phone", value: "+12345678901" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { name: "password", value: "mypassword" },
    });
    fireEvent.change(screen.getByTestId("confirmPassword"), {
      target: { name: "confirmPassword", value: "mypassword" },
    });
  };

  test("renders form fields correctly", () => {
    render(<AgentClient />);

    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("phone")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("confirmPassword")).toBeInTheDocument();
  });

  test("shows validation errors for empty fields", async () => {
    render(<AgentClient />);

    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    expect(await screen.findByText(/Username is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Phone number is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Please confirm your password/i)).toBeInTheDocument();
  });

  test("shows phone format error", async () => {
    render(<AgentClient />);

    fireEvent.change(screen.getByTestId("phone"), {
      target: { name: "phone", value: "99999" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    expect(
      await screen.findByText(/Enter valid phone number with country code/i)
    ).toBeInTheDocument();
  });

  test("shows email validation error", async () => {
    render(<AgentClient />);

    fireEvent.change(screen.getByTestId("email"), {
      target: { name: "email", value: "invalid-email" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    expect(await screen.findByText(/Invalid email address/i)).toBeInTheDocument();
  });

  test("shows password mismatch error", async () => {
    render(<AgentClient />);

    fireEvent.change(screen.getByTestId("password"), {
      target: { name: "password", value: "mypassword" },
    });
    fireEvent.change(screen.getByTestId("confirmPassword"), {
      target: { name: "confirmPassword", value: "wrongpass" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    expect(await screen.findByText(/Passwords do not match/i)).toBeInTheDocument();
  });

  test("submits form successfully", async () => {
    axios.post.mockResolvedValueOnce({ status: 201 });

    render(<AgentClient />);
    fillForm();

    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    await waitFor(() =>
      expect(axios.post).toHaveBeenCalledWith("/api/agentRegister", {
        serviceType: "Agent",
        username: "John",
        email: "john@mail.com",
        phone: "+12345678901",
        password: "mypassword",
        confirmPassword: "mypassword",
      })
    );

    expect(toast.success).toHaveBeenCalled();
  });

  test("handles API error", async () => {
    axios.post.mockRejectedValueOnce({
      response: { data: { error: "Email already exists" } },
    });

    render(<AgentClient />);
    fillForm();

    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith("Email already exists"));
  });

  test("submit button disabled during submission", async () => {
    axios.post.mockResolvedValueOnce({ status: 201 });

    render(<AgentClient />);
    fillForm();

    const button = screen.getByRole("button", { name: /Register/i });

    fireEvent.click(button);
    expect(button).toBeDisabled();

    await waitFor(() => expect(button).not.toBeDisabled());
  });
});
