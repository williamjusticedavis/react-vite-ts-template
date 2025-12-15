import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

describe("Routes", () => {
  it("renders without crashing", () => {
    render(<RouterProvider router={router} />);
  });
});
