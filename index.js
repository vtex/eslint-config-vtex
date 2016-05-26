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
    "semi": [2, "never"],
    "semi-spacing": [2, { "before": false, "after": true }],
    "keyword-spacing": [2, {
      "before": false,
      "after": true,
      "overrides": {
        "from": { "before": true },
        "return": { "before": true },
        "else": { "before": true },
        "catch": { "before": true },
        "as": { "before": true }
      }
    }],
    "react/wrap-multilines": 1,
    "react/jsx-boolean-value": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-space-before-closing": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/self-closing-comp": 2,
    "react/jsx-no-bind": 2,
    "react/no-did-update-set-state": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2
  },
  "plugins": [
    "react"
  ]
};
