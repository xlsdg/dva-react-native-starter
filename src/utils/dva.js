// import _ from 'lodash';
import React from 'react';
import { create } from 'dva-core';
import { Provider } from 'react-redux';
import createLoading from 'dva-loading';

export default function dva(options = {}) {
  const app = create(options);

  if (global) {
    // HMR workaround
    if (!global.registered) {
      options.models.forEach(m => app.model(m));
    }

    global.registered = true;
  }

  app.use(createLoading());

  app.start();

  // eslint-disable-next-line no-underscore-dangle
  const store = app._store;

  // eslint-disable-next-line react/display-name
  app.started = children => () => <Provider store={store}>{children}</Provider>;

  app.getStore = () => store;

  return app;
}
