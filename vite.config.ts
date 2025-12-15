import path from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
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
      ],
    },
  },
});
