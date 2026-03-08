import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import globals from "globals";

const tsFiles = ["**/*.ts", "**/*.tsx"];
const tsOnlyConfigs = tseslint.configs.recommended.map((c) => ({
  ...c,
  files: tsFiles,
}));

export default [
  {
    ignores: [
      "dist",
      "node_modules",
      "*.config.js",
      "*.config.mjs",
      ".astro",
      "coverage",
    ],
  },
  ...eslintPluginAstro.configs.recommended,
  ...tsOnlyConfigs,
  {
    files: tsFiles,
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
