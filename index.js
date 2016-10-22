module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 0,
    'import/no-unresolved': 1,
    'react/jsx-filename-extension': [
      1, {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 1,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 1
  }
};
