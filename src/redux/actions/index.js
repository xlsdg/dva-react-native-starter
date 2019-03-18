export function actionCreator({ error, type, payload, meta, namespace }) {
  return {
    type: (namespace ? `${namespace}/` : '') + type,
    payload,
    error,
    meta,
  };
}

export function getAction(type, payload, namespace) {
  return actionCreator({
    error: false,
    type,
    payload,
    meta: null,
    namespace,
  });
}
