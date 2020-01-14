module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    // waiting for https://github.com/typescript-eslint/typescript-eslint/issues/50
    '@typescript-eslint/explicit-function-return-type': 'off',

    // allow to have _ unused variables
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '_+',
      },
    ],
  },
}
