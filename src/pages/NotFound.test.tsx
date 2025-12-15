import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "./NotFound";

describe("NotFoundPage", () => {
  it("renders 404 message", () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();

    expect(screen.getByText(/does not exist/i)).toBeInTheDocument();
  });

  it("renders link back to home", () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /go back home/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
