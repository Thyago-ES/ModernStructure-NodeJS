import pluginObject from "@stylistic/eslint-plugin-js";
import prettierPlugin from "eslint-plugin-prettier";

export default {
  plugins: {
    "@stylistic/js": pluginObject,
    prettier: pluginObject,
  },
  rules: {
    indent: ["error", 2],
    "@stylistic/js/indent": ["error", 2],
    // Configure a regra "prettier" corretamente aqui
    "prettier/prettier": [
      "error",
      {
        // Aqui você pode adicionar opções específicas do prettier/eslint-plugin-prettier, se necessário
      },
    ],
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
};
