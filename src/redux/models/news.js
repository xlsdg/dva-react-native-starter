import _ from 'lodash';

import { NS_NEWS } from '@/redux/namespaces/index';

const initialState = {};

export default {
  namespace: NS_NEWS,
  state: _.cloneDeep(initialState),
  reducers: {},
  effects: {},
  subscriptions: {},
};
