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
      experimentalObjectRestSpread: true,
    }
  },  
  rules: {
    'class-methods-use-this': 0,    
    'no-use-before-define': 0,
    'import/no-unresolved': 1,    
  }
};
