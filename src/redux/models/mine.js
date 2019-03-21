import _ from 'lodash';

import { NS_MINE } from '@/redux/namespaces/index';

const initialState = {};

export default {
  namespace: NS_MINE,
  state: _.cloneDeep(initialState),
  reducers: {},
  effects: {},
  subscriptions: {},
};
