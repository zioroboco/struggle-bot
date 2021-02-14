module.exports = {
  extends: [
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "sort-imports-es6-autofix"],
  rules: {
    "import/no-extraneous-dependencies": ["error"],
    "sort-imports-es6-autofix/sort-imports-es6": ["error"],
  },
}
