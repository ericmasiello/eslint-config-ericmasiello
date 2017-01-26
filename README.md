## What you get

Out of the box, this configuration is appropriate for any ES2015 projects running in the browser or Node. There are additional configurations you can add to extend the base configuration. These include:

* **Flow**: `eslint-config-ericmasiello/flow`
* **React**: `eslint-config-ericmasiello/react`
* **React Native**: `eslint-config-ericmasiello/react-native`

## Installation

### npm:
```shell
(
  export PKG=eslint-config-ericmasiello;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

### Yarn:
```shell
(
  export PKG=eslint-config-ericmasiello;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D "$PKG@latest"
)
```

## Configure your project

### Create the eslint files
```shell
touch .eslintrc.js .eslintignore
```

Inside of `.eslintrc.js` add the following:

```js
module.exports = {
  extends: 'eslint-config-ericmasiello'
};
```

**Note**: if you wish to use any of the other addon configurations that extend the base linting ruleset, you can add them like so:

```js
module.exports = {
  extends: [
    'eslint-config-ericmasiello',
    'eslint-config-ericmasiello/react',
    'eslint-config-ericmasiello/react-native',
    'eslint-config-ericmasiello/flow',
  ]
};
```
Pick and choose whichever are appropriate for your project.

Then, inside your `.eslintignore` file add the following:

```
# this negated pattern is currently needed to lint dot files
# see: https://github.com/eslint/eslint/issues/4828
!**/*.eslintrc.js
```

If you are using the React Native configuration, add the following to your `.eslintignore`

```
android
ios
```

Then finally, add the following script to your package.json.

```
"scripts": {  
  "lint": "eslint . .eslintrc.js --ext [js,jsx] --cache"
},
```
**Note** this may need to be customized for your own project. See the eslint CLI documentation http://eslint.org/docs/user-guide/command-line-interface
