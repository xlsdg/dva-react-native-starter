// import _ from 'lodash';
import {
  // Common
  TYPE_SET_LOADING,
  TYPE_SHOW_MODAL,
} from '@/redux/types';

export function actionCreator({ error, type, payload = {}, meta, namespace }) {
  return {
    type: (namespace ? `${namespace}/` : '') + type,
    payload,
    error,
    meta,
  };
}

export function getAction(type, payload = {}, namespace) {
  return actionCreator({
    error: false,
    type,
    payload,
    meta: null,
    namespace,
  });
}

// Common
export function actionSetLoading(payload, namespace) {
  return getAction(TYPE_SET_LOADING, payload, namespace);
}

export function actionShowModal(payload, namespace) {
  return getAction(TYPE_SHOW_MODAL, payload, namespace);
}
