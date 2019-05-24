// import _ from 'lodash';
import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isiOS = Platform.OS === 'ios';

export const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
export const px2dp = px => PixelRatio.roundToNearestPixel(px);

// 设备尺寸，单位 dp
const DEVICE_INFO = Dimensions.get('window');
export const DEVICE_WIDTH_DP = DEVICE_INFO.width;
export const DEVICE_HEIGHT_DP = DEVICE_INFO.height;
// 设备尺寸，单位 px
export const DEVICE_SIZE_PX = {
  width: dp2px(DEVICE_WIDTH_DP),
  height: dp2px(DEVICE_HEIGHT_DP),
  ratio: PixelRatio.get(),
};
// 设计稿尺寸，单位 px
export const DESIGN_SIZE_PX = {
  width: 750,
  height: 1334,
  ratio: 2,
};
// fixedWidth
export const FW_SCALE = DEVICE_SIZE_PX.width / DESIGN_SIZE_PX.width;
// fixedHeight
export const FH_SCALE = DEVICE_SIZE_PX.height / DESIGN_SIZE_PX.height;

function checkDimensions(width, height) {
  return (
    (DEVICE_WIDTH_DP === width && DEVICE_HEIGHT_DP === height) ||
    (DEVICE_WIDTH_DP === height && DEVICE_HEIGHT_DP === width)
  );
}

export const isiPhone = isiOS && !Platform.isPad && !Platform.isTV;
export const isiPhoneX = isiPhone && checkDimensions(1125 / 3, 2436 / 3);
export const isiPhoneXS = isiPhoneX;
export const isiPhoneXSMax = isiPhone && checkDimensions(1242 / 3, 2688 / 3);
export const isiPhoneXR = isiPhone && checkDimensions(828 / 2, 1792 / 2);

export const STATUS_BAR_HEIGHT = getStatusBarHeight();
export const STATUS_BAR_ANIMATION = false;
export const HOME_INDICATOR_HEIGHT = getHomeIndicatorHeight();

export function getStatusBarHeight() {
  if (isAndroid) {
    return StatusBar.currentHeight;
  }

  if (isiPhoneX || isiPhoneXS || isiPhoneXSMax || isiPhoneXR) {
    return 44;
  }

  return 20;
}

export function getHomeIndicatorHeight() {
  if (isiPhoneX || isiPhoneXS || isiPhoneXSMax || isiPhoneXR) {
    return 34;
  }

  return 0;
}
