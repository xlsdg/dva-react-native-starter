// import _ from 'lodash';
import React from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from '../app.json';

import dva from '@/utils/dva';
import getModels from '@/redux/models/index';
import { routerMiddleware, routerReducer } from '@/routes/index';
import Router from '@/routes/router';

const app = dva({
  initialState: {},
  models: getModels(),
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  // onError: (error, dispatch) => {
  //   error.preventDefault();
  // },
});

const App = app.started(<Router />);

AppRegistry.registerComponent(appName, () => App);
