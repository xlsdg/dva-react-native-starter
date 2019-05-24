import _ from 'lodash';

import EN_US from '@/locales/en-US';
import ZH_CH from '@/locales/zh-CN';

import { FW_SCALE, FH_SCALE, DEVICE_SIZE_PX, DESIGN_SIZE_PX, px2dp } from './device';

export function ratioPx(px, type = 'fw') {
  const scale = type === 'fw' ? FW_SCALE : FH_SCALE;
  return px2dp((px * scale) / DEVICE_SIZE_PX.ratio);
}

export function ratioDp(dp, type = 'fw') {
  return ratioPx(dp * DESIGN_SIZE_PX.ratio, type);
}

export function onePx() {
  return px2dp(1 / DEVICE_SIZE_PX.ratio);
}

export function getLocale() {
  // return 'en-US';
  return 'zh-CN';
}

export function getToken() {
  return '';
}

export function formatMessage({ id }) {
  const lang = getLocale();
  let message = '';

  switch (lang) {
    case 'en-US':
      message = EN_US[id];
      break;
    case 'zh-CN':
    default:
      message = ZH_CH[id];
      break;
  }

  return message;
}

export function hasString(str) {
  return _.isString(str) && !_.isEmpty(str);
}

export function hasArray(arr) {
  return _.isArray(arr) && !_.isEmpty(arr);
}

export function hasPlainObject(obj) {
  return _.isPlainObject(obj) && !_.isEmpty(obj);
}

export function getActiveRouteName(navigationState) {
  if (!hasPlainObject(navigationState)) {
    return;
  }

  const route = navigationState.routes[navigationState.index];
  if (hasArray(route.routes)) {
    return getActiveRouteName(route);
  }

  return route.routeName;
}
