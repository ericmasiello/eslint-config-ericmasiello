**Note** Currently this eslint configuration is tailored toward React Native development.

## Usage

```shell
npm i -D eslint-config-ericmasiello
```

### Create eslint files
```shell
touch .eslintrc.js
touch .eslintignore
```

Inside of `.eslintrc.js` add the following:

```js
module.exports = {
  extends: 'eslint-config-ericmasiello'
};
```

Then, inside your `.eslintignore` file add the following:

```
android
ios

# this negated pattern is currently needed to lint dot files
# see: https://github.com/eslint/eslint/issues/4828
!**/*.eslintrc.js
```

Then finally, add the following script to your package.json.

```
"scripts": {  
  "lint": "eslint . .eslintrc.js --ext [js,jsx] --cache"
},
```
