import _ from 'lodash';

import { NS_APP } from '@/redux/namespaces/index';

const initialState = {
  loading: false,
};

export default {
  namespace: NS_APP,
  state: _.cloneDeep(initialState),
  reducers: {},
  effects: {},
  subscriptions: {},
};
