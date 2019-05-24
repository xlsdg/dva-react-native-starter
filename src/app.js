// import _ from 'lodash';
import React from 'react';
import { AppRegistry } from 'react-native';
import { createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

import { name as AppName } from '../app.json';

import { AppNavigator } from '@/routes/navigator';
import Router from '@/routes/router';

import dva from './dva';

const routerReducer = createNavigationReducer(AppNavigator);
const routerMiddleware = createReactNavigationReduxMiddleware(state => state.router);

const App = dva({
  // history: ,
  initialState: {},
  // onError: (error, dispatch) => {
  //   error.preventDefault();
  // },
  onAction: [routerMiddleware],
  // onStateChange: state => {},
  // onReducer: reducer => {},
  // onEffect: effect => {},
  // onHmr: () => {},
  extraReducers: {
    router: routerReducer,
  },
  // extraEnhancers: [],
});

AppRegistry.registerComponent(AppName, () => App(<Router />));
