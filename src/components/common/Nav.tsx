import { useThemeContext } from "@/app/Theme-context";
import { cn } from "@/lib/cn";
import { NavLink } from "react-router-dom";
import { Button } from "../ui";
import { Moon, Sun } from "lucide-react";

const Nav = () => {
  const { theme, toggle } = useThemeContext();

  return (
    <nav className="flex items-center gap-6">
      <span className="text-sm font-semibold">react-vite-ts-template</span>

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors",
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
          )
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          cn(
            "text-sm font-medium transition-colors",
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
          )
        }
      >
        About
      </NavLink>

      <Button
        variant="ghost"
        size="sm"
        onClick={toggle}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </nav>
  );
};

export default Nav;
