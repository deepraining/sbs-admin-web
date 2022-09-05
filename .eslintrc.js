module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'plugin:flowtype/recommended', 'prettier', 'prettier/flowtype'],
  plugins: ['import', 'node', 'prettier', 'jest', 'flowtype'],
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      env: {
        'jest/globals': true,
      },
    },
  ],
  rules: {
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/order': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    radix: 0,
    'prefer-promise-reject-errors': 0,
    'no-plusplus': 0,
  },
};
