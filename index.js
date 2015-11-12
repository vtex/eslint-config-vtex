module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "jsx": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true
  },
  "rules": {
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "camelcase": [2, {"properties": "always"}],
    "curly": [2, "multi-line"],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "no-else-return": [2],
    "no-extra-semi": [2],
    "no-trailing-spaces": [2],
    "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],
    "quotes": [2, "single"],
    "react/wrap-multilines": 1,
    "semi": [2, "always"],
    "space-after-keywords": [2],
    "space-before-keywords": [2, "always"]
  },
  "plugins": [
    "react"
  ]
};
