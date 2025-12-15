import * as React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border p-4 shadow-md dark:shadow-blue-500",
        "bg-card border-gray-200 dark:border-gray-800",
        className
      )}
      {...props}
    />
  );
};

export default Card;
