import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'dva-core';
import DvaLoading from 'dva-loading';
import DvaImmer from 'dva-immer';

import getModels from '@/redux/models/index';

export default function createApp(hooksAndOpts = {}, createOpts = {}) {
  const app = create(hooksAndOpts, createOpts);

  app.use(DvaLoading());
  app.use(DvaImmer());

  if (!global) {
    global = {};
  }

  // HMR workaround
  if (!global.isRegistered) {
    _.forEach(getModels(), m => app.model(m));
    global.isRegistered = true;
  }

  app.start();

  return children => () => <Provider store={app._store}>{children}</Provider>;
}
