import _ from 'lodash';

import { NS_ASSETS } from '@/redux/namespaces/index';

const initialState = {};

export default {
  namespace: NS_ASSETS,
  state: _.cloneDeep(initialState),
  reducers: {},
  effects: {},
  subscriptions: {},
};
