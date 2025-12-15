import { render, screen } from "@testing-library/react";
import { Input } from "./ui/Input";

describe("Input", () => {
  it("renders input element", () => {
    render(<Input placeholder="Email" />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("can be disabled", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
