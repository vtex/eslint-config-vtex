module.exports = {
  // only rules not included in 'eslint:recommended' or with different values
  rules: {
    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    // TODO: https://github.com/vtex/front-end-coding-standard/issues/26
    'no-await-in-loop': 'off',

    // Disallow assignment in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'except-parens'],

    // Disallow use of console
    // https://eslint.org/docs/rules/no-console
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'error',

    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // TODO: https://github.com/vtex/front-end-coding-standard/issues/27
    'require-atomic-updates': 'off',
  },
}
