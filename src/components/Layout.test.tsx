import { renderWithProviders } from "@/test/renderWithProviders";
import { screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Layout from "./common/Layout";

describe("Layout", () => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <div>Outlet content</div>,
          },
        ],
      },
    ],
    { initialEntries: ["/"] }
  );

  it("renders navigation", () => {
    renderWithProviders({
      children: <RouterProvider router={router} />,
    });

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders outlet content", () => {
    renderWithProviders({
      children: <RouterProvider router={router} />,
    });

    expect(screen.getByText("Outlet content")).toBeInTheDocument();
  });
});
