module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  globals: {
    //define the globals here
    __DEV__: true,
    require: true,
    module: true,
    Promise: true,
    test: true,
    expect: true,
    console: true
  },
  rules: {
    'prettier/prettier': ['error'],

    //general
    'comma-dangle': ['error', 'never'],

    //react plugin
    'react/no-string-refs': 0,
    'react/display-name': 0,

    // React Hooks plugin
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    //style
    'no-multi-spaces': 1,
    'array-bracket-spacing': ['error', 'never'],
    indent: ['error', 4],
    'max-len': ['error', 180],
    'no-trailing-spaces': 1,
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],

    //variables
    'no-undef': 0,
    'no-unused-vars': 2,
    'no-shadow': 1,

    // for cleaner look
    'no-console': 0,

    'getter-return': 0,
    'for-direction': 0
  }
};
