import { render, screen } from "@testing-library/react";
import App from "@/app/App";

test("renders", () => {
  render(<App />);
  expect(screen.getByText(/react vite template/i)).toBeInTheDocument();
});
