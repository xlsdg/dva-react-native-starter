# Step

初始化项目：

```bash
react-native init DvaReactNativeStarter
```

修改 `package.json`：

```json
{
  "scripts": {
    "android": "react-native run-android",
    "android:log": "react-native log-android",
    "android:release": "react-native run-android --variant release",
    "ios": "react-native run-ios",
    "ios:device": "react-native run-ios --device",
    "ios:log": "react-native log-ios",
    "ios:release": "react-native run-ios --configuration Release",
    "lint": "eslint --ext .js src",
    "lint:fix": "eslint --fix --ext .js src",
    "prettier": "prettier --write './src/**/*.{js,jsx,ts,tsx,less,scss,css}'",
    "start": "react-native start --reset-cache",
    "test": "jest"
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
yarn add -D babel-plugin-module-resolver babel-plugin-lodash
```

添加导航：

```bash
yarn add react-navigation react-navigation-redux-helpers react-navigation-stack react-navigation-tabs
```

参考：https://reactnavigation.org/docs/en/getting-started.html

添加导航依赖：

```bash
yarn add react-native-reanimated react-native-gesture-handler react-native-screens
```

修改 `android/app/build.gradle` 文件，执行 `cd ios && pod install && cd ..`。

参考：

- https://github.com/kmagiera/react-native-reanimated
- https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html
- https://github.com/kmagiera/react-native-screens

添加 `Dva.js`：

```bash
yarn add dva-core dva-immer dva-loading redux react-redux
```

添加第三方组件：

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
