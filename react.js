module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1, {
        extensions: ['.js', '.jsx'],
      }
    ],
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 1,
  }
};
