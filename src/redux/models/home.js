import _ from 'lodash';

import { NS_HOME } from '@/redux/namespaces/index';

const initialState = {};

export default {
  namespace: NS_HOME,
  state: _.cloneDeep(initialState),
  reducers: {},
  effects: {},
  subscriptions: {},
};
