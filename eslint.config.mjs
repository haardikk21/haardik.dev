import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tailwindcss from "eslint-plugin-tailwindcss";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/node_modules", "**/out", "**/.vscode", "**/.next"]), {
    extends: [...nextCoreWebVitals, ...compat.extends("plugin:prettier/recommended")],

    rules: {
        "prettier/prettier": ["error", {
            singleQuote: true,
            endOfLine: "auto",
        }],
    },
}, {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
        ...compat.extends("plugin:tailwindcss/recommended"),
        ...compat.extends("plugin:prettier/recommended")
    ],

    plugins: {
        tailwindcss,
        "simple-import-sort": simpleImportSort,
    },

    rules: {
        "@next/next/no-img-element": "off",
    },
}]);