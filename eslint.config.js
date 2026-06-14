import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  js.configs.recommended,
  prettier,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["*.config.js"],
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
    },
  },
];
