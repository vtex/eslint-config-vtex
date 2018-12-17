module.exports = {
  "extends": [
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": ["import", "lodash"],
  "rules": {
    "import/no-unresolved": [
      "error",
      {
        "commonjs": true,
        "amd": true,
        "ignore": ["^([a-zA-Z@]+[-\\.]?)+"]
      }
    ],
    "lodash/import-scope": [2, "method"],
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "jest": true
  },
  "globals": {
    "__DEV__": true
  }
};
