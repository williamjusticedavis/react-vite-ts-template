import { ThemeProvider } from "@/app/ThemeProvider";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";

interface Options {
  children: ReactNode;
}

export const renderWithProviders = ({ children }: Options) => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};
