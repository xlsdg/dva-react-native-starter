# Step

初始化项目：

```bash
react-native init DvaReactNativeStarter
```

修改 `package.json` 的 `name` 字段：

```json
{
  "name": "dva-react-native-starter"
}
```

添加 `VSCode` 的工作区设置：

```json
{
  "javascript.validate.enable": false
}
```

根据 `.flowconfig` 添加特定版本的 `Flow`：

```bash
yarn add -D flow-bin@0.92.0
```

添加 `CommitLint`：

```bash
yarn add -D lint-staged husky @commitlint/cli @commitlint/config-conventional
```

添加 `ESLint`：

```bash
yarn add -D babel-eslint eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-import-resolver-babel-module prettier
```

重命名 `babel.config.js` 为 `.babel.rc`，修改 `Babel`：

```bash
yarn add -D babel-plugin-module-resolver babel-plugin-transform-react-remove-prop-types babel-plugin-transform-remove-console babel-plugin-transform-remove-debugger babel-plugin-lodash
```

添加导航：

```bash
yarn add react-navigation react-navigation-redux-helpers react-native-gesture-handler
react-native link react-native-gesture-handler
```

修改 `android/app/src/main/java/com/dvareactnativestarter/MainActivity.java` 文件：

参考：https://reactnavigation.org/docs/en/getting-started.html

添加 `Dva.js`：

```bash
yarn add dva-core@next dva-loading@next react-redux
```

添加 `Lodash.js` 和 `PropTypes`：

```bash
yarn add lodash prop-types
```
