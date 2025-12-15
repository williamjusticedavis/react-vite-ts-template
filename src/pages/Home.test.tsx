import { render, screen } from "@testing-library/react";
import HomePage from "./Home";

describe("HomePage", () => {
  it("renders the home page content", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();

    expect(
      screen.getByText(/minimal react \+ vite \+ tailwind/i)
    ).toBeInTheDocument();
  });

  it("renders input field", () => {
    render(<HomePage />);

    expect(screen.getByPlaceholderText(/type something/i)).toBeInTheDocument();
  });

  it("renders all button variants", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("button", { name: /primary/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /secondary/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ghost/i })).toBeInTheDocument();
  });
});
