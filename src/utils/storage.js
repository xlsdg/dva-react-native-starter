// import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

export const getItem = AsyncStorage.getItem;
export const setItem = AsyncStorage.setItem;
export const removeItem = AsyncStorage.removeItem;
export const mergeItem = AsyncStorage.mergeItem;
export const clear = AsyncStorage.clear;
export const getAllKeys = AsyncStorage.getAllKeys;
export const flushGetRequests = AsyncStorage.flushGetRequests;
export const multiGet = AsyncStorage.multiGet;
export const multiSet = AsyncStorage.multiSet;
export const multiRemove = AsyncStorage.multiRemove;
export const multiMerge = AsyncStorage.multiMerge;
