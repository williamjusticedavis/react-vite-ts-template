import { ThemeProvider } from "@/app/ThemeProvider";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Nav from "./common/Nav";

const renderNav = (initialPath = "/") => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <Nav />,
      },
      {
        path: "/about",
        element: <Nav />,
      },
    ],
    { initialEntries: [initialPath] }
  );

  return render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

describe("Nav", () => {
  it("renders navigation links", () => {
    renderNav();

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });

  it("toggles theme when clicking theme button", async () => {
    const user = userEvent.setup();
    renderNav();

    const toggleButton = screen.getByRole("button");
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    await user.click(toggleButton);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
