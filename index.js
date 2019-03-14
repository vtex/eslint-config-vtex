module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'import', 'lodash', 'prettier'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    __DEV__: true,
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
  },
}
