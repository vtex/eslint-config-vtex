module.exports = {
  extends: [
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parser: "babel-eslint",
  plugins: ["import", "lodash"],
  rules: {
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
        amd: true,
        ignore: ["^([a-zA-Z@]+[-\\.]?)+"],
      },
    ],
    "lodash/import-scope": [2, "method"],
    "no-console": 0,
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true,
  },
  globals: {
    __DEV__: true
  },
}
