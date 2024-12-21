import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Adjust the rule for explicit `any` usage
      "@typescript-eslint/no-explicit-any": [
        "warn", // Show a warning instead of an error
        {
          "ignoreRestArgs": true, // Allow `any` for rest arguments
        },
      ],
    },
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"], // Target TypeScript files
        rules: {
          "@typescript-eslint/no-explicit-any": "off", // Disable rule for TypeScript files
        },
      },
    ],
  },
];

export default eslintConfig;
