import { AsyncStorage } from 'react-native';

function getItem(...args) {
  return AsyncStorage.getItem(...args);
}

function setItem(...args) {
  return AsyncStorage.setItem(...args);
}

function removeItem(...args) {
  return AsyncStorage.removeItem(...args);
}

function mergeItem(...args) {
  return AsyncStorage.mergeItem(...args);
}

function clear(...args) {
  return AsyncStorage.clear(...args);
}

function getAllKeys(...args) {
  return AsyncStorage.getAllKeys(...args);
}

function flushGetRequests(...args) {
  return AsyncStorage.flushGetRequests(...args);
}

function multiGet(...args) {
  return AsyncStorage.multiGet(...args);
}

function multiSet(...args) {
  return AsyncStorage.multiSet(...args);
}

function multiRemove(...args) {
  return AsyncStorage.multiRemove(...args);
}

function multiMerge(...args) {
  return AsyncStorage.multiMerge(...args);
}

export default {
  getItem,
  setItem,
  removeItem,
  mergeItem,
  clear,
  getAllKeys,
  flushGetRequests,
  multiGet,
  multiSet,
  multiRemove,
  multiMerge,
};
