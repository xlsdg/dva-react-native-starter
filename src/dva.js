import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'dva-core';
import DvaLoading from 'dva-loading';
import DvaImmer from 'dva-immer';

import getModels from '@/redux/models/index';

export default function dva(options = {}) {
  const app = create(options);

  app.use(DvaLoading());
  app.use(DvaImmer());

  // HMR workaround
  if (global && !global.isRegistered) {
    _.forEach(getModels(), m => app.model(m));
    global.isRegistered = true;
  }

  app.start();

  return children => () => <Provider store={app._store}>{children}</Provider>;
}
