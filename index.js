module.exports = {
  extends: [
    'eslint:recommended',
    './rules/imports.js',
    './rules/typescript.js',
    './rules/prettier.js',
  ],
  plugins: ['prettier'],
  globals: {
    __DEV__: true,
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
}
