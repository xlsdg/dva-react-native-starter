// import _ from 'lodash';
import { Dimensions, PixelRatio } from 'react-native';

import EN_US from '@/locales/en-US';
import ZH_CH from '@/locales/zh-CN';

// const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
// const px2dp = px => PixelRatio.roundToNearestPixel(px);

// 设备尺寸，单位 dp
const { width: DEVICE_WIDTH_DP, height: DEVICE_HEIGHT_DP } = Dimensions.get('window');
// 设备宽度，单位 px
const DEVICE_WIDTH_PX = PixelRatio.getPixelSizeForLayoutSize(DEVICE_WIDTH_DP);
// 设备高度，单位 px
const DEVICE_HEIGHT_PX = PixelRatio.getPixelSizeForLayoutSize(DEVICE_HEIGHT_DP);
// 设备像素密度
const DEVICE_RATIO = PixelRatio.get();
// 设计稿尺寸，单位 px
const DESIGN_SIZE_PX = { width: 750, height: 1334, ratio: 2 };
// fixedWidth
const FW_SCALE = DEVICE_WIDTH_PX / DESIGN_SIZE_PX.width;
// fixedHeight
const FH_SCALE = DEVICE_HEIGHT_PX / DESIGN_SIZE_PX.height;

export function px2dp(px, type = 'fw') {
  const scale = type === 'fw' ? FW_SCALE : FH_SCALE;
  return PixelRatio.roundToNearestPixel((px * scale) / DEVICE_RATIO);
}

export function dp2px(dp, type = 'fw') {
  return px2dp(dp * DESIGN_SIZE_PX.ratio, type);
}

export function getLocale() {
  // return 'en-US';
  return 'zh-CN';
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
