import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    // Общие правила
    ignores: ["**/coverage/**"],
    rules: {
      "no-console": "warn"
    }
  },
  {
    // Правила для конфигурационных файлов
    files: ["**/*.config.js"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        process: "readonly"
      },
      parserOptions: {
        sourceType: "script"
      }
    }
  },
  {
    // Настройки для тестов
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        test: "readonly",
        expect: "readonly"
      }
    }
  }
];