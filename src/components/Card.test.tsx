import { render, screen } from "@testing-library/react";
import Card from "./ui/Card";

describe("Card", () => {
  it("renders children", () => {
    render(
      <Card>
        <span>Content</span>
      </Card>
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
