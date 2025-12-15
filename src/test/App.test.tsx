import App from "@/app/App";
import { render, screen } from "@testing-library/react";

test("renders", () => {
  render(<App />);
  expect(screen.getByText(/react vite template/i)).toBeInTheDocument();
});
