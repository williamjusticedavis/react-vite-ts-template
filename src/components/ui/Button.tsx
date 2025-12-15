import { cn } from "@/lib/cn";
import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer",
          "disabled:pointer-events-none disabled:opacity-50",

          variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
          variant === "secondary" &&
            "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
          variant === "ghost" &&
            "bg-transparent hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white",

          size === "sm" && "h-8 px-3 text-sm",
          size === "md" && "h-10 px-4 text-sm",
          size === "lg" && "h-12 px-6 text-base",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
