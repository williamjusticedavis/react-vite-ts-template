import { render, screen } from "@testing-library/react";
import AboutPage from "./About";

describe("AboutPage", () => {
  it("renders the about page content", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();

    expect(
      screen.getByText(/designed for pure frontend applications/i)
    ).toBeInTheDocument();
  });
});
