import { Dimensions, PixelRatio } from 'react-native';

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
const DESIGN_SIZE_PX = { width: 750, height: 1334 };
// fixedWidth
const FW_SCALE = DEVICE_WIDTH_PX / DESIGN_SIZE_PX.width;
// fixedHeight
const FH_SCALE = DEVICE_HEIGHT_PX / DESIGN_SIZE_PX.height;

export function px2dp(px, type = 'fw') {
  const scale = type === 'fw' ? FW_SCALE : FH_SCALE;
  return PixelRatio.roundToNearestPixel((px * scale) / DEVICE_RATIO);
}

export function getLocale() {
  return 'zh-CN';
}
