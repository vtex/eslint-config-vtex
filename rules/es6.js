module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  rules: {
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error'],

    // Require let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // Suggest using arrow functions as callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    // TODO discussion
    'prefer-arrow-callback': [
      'off',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // Suggest using of const declaration for variables that are never modified after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    // TODO https://github.com/vtex/front-end-standards/issues/33
    'prefer-destructuring': [
      'off',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // Use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Suggest using the spread operator instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'warn',

    // Disallow generator functions that do not have yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // Require a Symbol description
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',
  },
}
