module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'import', 'lodash', 'prettier'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: true,
        ignore: ['^([a-zA-Z@]+[-\\.]?)+'],
      },
    ],
    'lodash/import-scope': [2, 'method'],
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // waiting for https://github.com/typescript-eslint/typescript-eslint/issues/50
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
