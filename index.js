module.exports = {
  extends: [
    'eslint:recommended',
    './rules/errors.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/imports.js',
    './rules/typescript.js',
    './rules/prettier.js',
  ],
  globals: {
    __DEV__: true,
  },
}
