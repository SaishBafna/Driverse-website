import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  test("renders input with label", () => {
    render(<Input name="username" label="Username" value="" onChange={() => {}} />);
    
    const inputElement = screen.getByLabelText(/username/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange when value changes", () => {
    const handleChange = jest.fn();
    
    render(
      <Input
        name="username"
        label="Username"
        value=""
        onChange={handleChange}
      />
    );

    const inputElement = screen.getByLabelText(/username/i);
    fireEvent.change(inputElement, { target: { value: "John" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("shows label as focused when input is focused", () => {
    render(<Input name="username" label="Username" value="" onChange={() => {}} />);

    const inputElement = screen.getByLabelText(/username/i);
    fireEvent.focus(inputElement);

    const labelElement = screen.getByText(/username/i);
    expect(labelElement).toHaveClass("text-blue-500");
  });

  test("removes focused label style when blurred and no value", () => {
    render(<Input name="username" label="Username" value="" onChange={() => {}} />);

    const inputElement = screen.getByLabelText(/username/i);

    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    const labelElement = screen.getByText(/username/i);
    expect(labelElement).not.toHaveClass("text-blue-500");
  });

  test("keeps label in focused style when value exists", () => {
    const handleChange = jest.fn();

    render(
      <Input
        name="username"
        label="Username"
        value="John"
        onChange={handleChange}
      />
    );

    const labelElement = screen.getByText(/username/i);
    expect(labelElement).toHaveClass("text-blue-500");
  });
});
