module.exports = {
  extends: [
    'eslint:recommended',
    './rules/node.js',
    './rules/errors.js',
    './rules/variables.js',
    './rules/style.js',
    './rules/imports.js',
    './rules/typescript.js',
    './rules/prettier.js',
  ],
  globals: {
    __DEV__: true,
  },
}
