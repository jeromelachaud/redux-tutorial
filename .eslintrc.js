module.exports = {
  root: true,
  env: {
    es6: true,
    jasmine: true,
    "browser": true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [ 'standard', 'plugin:react/recommended' ],
  plugins: [ 'react', 'jest'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  // custom rules
  rules: {
    'react/no-deprecated': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'ignore',
    }],
  }

}
