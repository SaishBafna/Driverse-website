import { render, screen, fireEvent } from "@testing-library/react";
import FloatingLabelInput from "@/app/components/FloatingLabelInput"; // adjust path
import React from "react";

describe("FloatingLabelInput Component", () => {
  test("renders input and label", () => {
    render(
      <FloatingLabelInput
        name="email"
        label="Email Address"
        value=""
        onChange={() => {}}
      />
    );

    // label exists
    expect(screen.getByText("Email Address")).toBeInTheDocument();

    // input exists
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "email");
  });

  test("calls onChange when typing", () => {
    const handleChange = jest.fn();

    render(
      <FloatingLabelInput
        name="username"
        label="Username"
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "John Doe" } });

    expect(handleChange).toHaveBeenCalled();
  });

  test("shows label when focused", () => {
    render(
      <FloatingLabelInput
        name="test"
        label="Test Label"
        value=""
        onChange={() => {}}
      />
    );

    const input = screen.getByRole("textbox");
    const label = screen.getByText("Test Label");

    // Initially label should not have active state
    expect(label).toHaveClass("text-transparent");

    // Focus input
    fireEvent.focus(input);
    // After focusing label should show active class due to isFocused
    expect(label.className).toMatch(/text-blue-500/);
  });

  test("keeps label visible when value exists even after blur", () => {
    let value = "Test Value";

    const handleChange = jest.fn((e) => {
      value = e.target.value;
    });

    const { rerender } = render(
      <FloatingLabelInput
        name="test"
        label="Test"
        value={value}
        onChange={handleChange}
      />
    );

    const input = screen.getByRole("textbox");
    const label = screen.getByText("Test");

    // Blur input
    fireEvent.blur(input);

    // Rerender to reflect new value state
    rerender(
      <FloatingLabelInput
        name="test"
        label="Test"
        value={value}
        onChange={handleChange}
      />
    );

    // Label should remain visible (not transparent)
    expect(label.className).toMatch(/bg-white/);
    expect(label.className).toMatch(/text-blue-500/);
  });
});
