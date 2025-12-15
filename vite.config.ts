import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/react-vite-ts-template",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    typecheck: {
      tsconfig: "./tsconfig.json",
    },
    coverage: {
      reporter: ["text", "html"],
      exclude: [
        "src/test/**",
        "**/.eslintrc.cjs",
        "**/eslint.config.js",
        "**/vite.config.ts",
        "src/main.tsx",
        "src/app/providers.tsx",
        "src/app/routeConfig.ts",
        "src/lib/constants.ts",
        "src/lib/env.ts",
        "src/types/**",
      ],
    },
  },
});
