module.exports = {
  rules: {
    'no-trailing-spaces': 0,
    'max-len': ['error', 150, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
    }],
    'flowtype/union-intersection-spacing': 1,
  },
};
