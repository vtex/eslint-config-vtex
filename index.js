module.exports = {
  extends: [
    'eslint:recommended',
    './rules/node.js',
    './rules/imports.js',
    './rules/typescript.js',
    './rules/prettier.js',
  ],
  globals: {
    __DEV__: true,
  },
}
