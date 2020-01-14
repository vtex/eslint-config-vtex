module.exports = {
  extends: ['plugin:import/typescript'],
  plugins: ['import'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
      },
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/no-mutable-exports': 'warn',
    'import/export': 'warn',
    'import/no-useless-path-segments': 'error',
    'import/no-self-import': 'error',
    'import/no-absolute-path': 'error',
  },
}
