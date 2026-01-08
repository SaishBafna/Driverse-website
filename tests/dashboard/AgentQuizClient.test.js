import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AgentQuizClient from "@/app/dashboard/AgentQuiz/AgentQuizClient"; // adjust path
import axios from "axios";
import { toast } from "sonner";

// Mock toast to avoid UI noise
jest.mock("sonner", () => ({
  toast: { success: jest.fn(), error: jest.fn() },
}));

// Mock axios
jest.mock("axios");

describe("AgentQuizClient Component", () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders email verification screen first", () => {
    render(<AgentQuizClient />);

    expect(
      screen.getByText("Agent Verification", { selector: "h1" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /verify email/i })
    ).toBeInTheDocument();
  });

  test("moves to quiz screen after valid email submit", async () => {
    // Mock fetch response for /api/checkEmail
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ exists: true }),
      })
    );

    render(<AgentQuizClient />);

    fireEvent.change(screen.getByPlaceholderText(/registered email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /verify email/i }));

    await waitFor(() =>
      expect(
        screen.getByText(/Agent Communication Quiz/i)
      ).toBeInTheDocument()
    );
  });

  test("can select quiz answers and enable submit button", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ exists: true }),
      })
    );

    render(<AgentQuizClient />);

    // Complete email step
    fireEvent.change(screen.getByPlaceholderText(/registered email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /verify email/i }));

    await waitFor(() =>
      screen.getByText(/Agent Communication Quiz/i)
    );

    // Initially submit button disabled
    const submitBtn = screen.getByRole("button", { name: /submit answers/i });
    expect(submitBtn).toBeDisabled();

    // Select first option for each question
    const radioButtons = screen.getAllByRole("radio");
    radioButtons.forEach((radio) => fireEvent.click(radio));

    expect(submitBtn).not.toBeDisabled();
  });

  test("submits quiz and shows score result", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ exists: true }),
      })
    );

    axios.post.mockResolvedValue({
      data: { success: true },
    });

    render(<AgentQuizClient />);

    fireEvent.change(screen.getByPlaceholderText(/registered email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /verify email/i }));

    await waitFor(() => screen.getByText(/Agent Communication Quiz/i));

    // Answer all questions
    const radios = screen.getAllByRole("radio");
    radios.forEach((r) => fireEvent.click(r));

    fireEvent.click(screen.getByRole("button", { name: /submit answers/i }));

    await waitFor(() =>
      expect(screen.getByText(/You scored/i)).toBeInTheDocument()
    );
  });
});
