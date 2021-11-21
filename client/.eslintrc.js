module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/no-set-state': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    "react/react-in-jsx-scope": "off",

    'prefer-template': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    curly: 'off',
    'no-useless-constructor': 'warn',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      0,
      {
        commonjs: true,
        amd: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'function-paren-newline': ['error', 'consistent'],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_key', '__get', '__typename'],
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true, minProperties: 5 },
        ImportDeclaration: { multiline: true, minProperties: 5 },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'space-in-parens': ['error', 'never'],
    'arrow-parens': ['warn', 'as-needed'],
    'no-confusing-arrow': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['**/tests/*'],
  settings: { react: { version: 'detect' } },
};