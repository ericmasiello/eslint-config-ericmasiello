**Note** Currently this eslint configuration is tailored toward React Native development.

## Usage
Use one of the following tools, `npm` or `yarn` to add the dependency.
### npm
```shell
npm i -D eslint-config-ericmasiello
```
### yarn
```shell
yarn add -D eslint-config-ericmasiello
```

### Create eslint files
In the root directory of your project, you'll need to create a .eslintrc.js and .eslintignore file. Run these two commands to populate those two files.
```shell
echo -e 'module.exports = {\n  extends: '"'"'eslint-config-ericmasiello'"'"'\n};' > .eslintrc.js
```

```shell
echo -e 'android\nios\n\n# this negated pattern is currently needed to lint dot files\n# see: https://github.com/eslint/eslint/issues/4828\n!**/*.eslintrc.js' > .eslintignore
```

Then finally, add the following script to your package.json.

```
"scripts": {  
  "lint": "eslint . .eslintrc.js --ext [js,jsx] --cache"
},
```
