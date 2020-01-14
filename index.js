module.exports = {
  extends: [
    'eslint:recommended',
    './rules/imports.js',
    './rules/typescript.js',
    './rules/react.js',
    './rules/prettier.js',
  ],
  plugins: ['lodash', 'prettier'],
  globals: {
    __DEV__: true,
  },
  rules: {
    'lodash/import-scope': [2, 'method'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
}
