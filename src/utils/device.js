import { Dimensions, PixelRatio, Platform } from 'react-native';

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
