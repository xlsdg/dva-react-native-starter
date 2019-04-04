# Step

初始化项目：

```bash
react-native init DvaReactNativeStarter
```

修改 `package.json`：

```json
{
  "name": "dva-react-native-starter",
  "scripts": {
    "start": "react-native start --reset-cache",
    "ios": "react-native run-ios",
    "ios:device": "react-native run-ios --device",
    "android": "react-native run-android",
    "test": "jest",
    "lint": "eslint --ext .js src",
    "lint:fix": "eslint --fix --ext .js src",
    "prettier": "prettier --write './src/**/*.{js,jsx,ts,tsx,less,scss,css}'"
  }
}
```

添加 `CommitLint`：

```bash
yarn add -D lint-staged husky @commitlint/cli @commitlint/config-conventional
```

添加 `ESLint`：

```bash
yarn add -D babel-eslint eslint eslint-config-prettier eslint-plugin-prettier eslint-config-alloy eslint-plugin-react eslint-plugin-react-hooks eslint-import-resolver-babel-module prettier
```

删除 `babel.config.js`，添加 `Babel`：

```bash
yarn add -D babel-plugin-module-resolver babel-plugin-transform-react-remove-prop-types babel-plugin-transform-remove-console babel-plugin-transform-remove-debugger babel-plugin-lodash
```

添加导航：

```bash
yarn add react-navigation react-navigation-redux-helpers react-native-gesture-handler
react-native link react-native-gesture-handler
```

修改 `android/app/src/main/java/com/dvareactnativestarter/MainActivity.java` 文件：

参考：https://reactnavigation.org/docs/en/getting-started.html 或 https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html

添加 `Dva.js`：

```bash
yarn add dva-core@next dva-loading@next react-redux
```

添加 `Lodash.js` 和 `PropTypes`：

```bash
yarn add lodash prop-types
```

添加请求库：

```bash
yarn add qs axios
```

删除 `App.js`，拷贝 `src` 文件夹，修改 `index.js`：

```js
import './src/app';
```
