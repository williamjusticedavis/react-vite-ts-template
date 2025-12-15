import { render } from "@testing-library/react";
import { useThemeContext } from "./Theme-context";

const BadConsumer = () => {
  useThemeContext();
  return null;
};

describe("useThemeContext", () => {
  it("throws if used outside ThemeProvider", () => {
    expect(() => render(<BadConsumer />)).toThrow(
      "useThemeContext must be used within ThemeProvider"
    );
  });
});
