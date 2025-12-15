module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["unused-imports"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    react: { version: "detect" },
  },
};
