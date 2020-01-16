module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
  rules: {
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/self-closing-comp': 'off',

    // JSX Rules
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-tag-spacing': 'off',

    // Hooks
    // Enforce Rules of Hooks
    // https://github.com/facebook/react/blob/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
    'react-hooks/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://github.com/facebook/react/blob/1204c789776cb01fbaf3e9f032e7e2ba85a44137/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
    'react-hooks/exhaustive-deps': 'error',
  },
}
