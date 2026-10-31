import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import-x"; 
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["dist/**", "build/**", "node_modules/**"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    languageOptions: {
      parser: tseslint.parser, 
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",

      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
    },
    plugins: {
      "import": eslintPluginImport,
    },
    rules: {
      "no-debugger": "off",
      "no-console": "off", 
      "class-methods-use-this": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  eslintPluginPrettierRecommended
);
