// import _ from 'lodash';
import HomeModel from '@/redux/models/home';
import AssetsModel from '@/redux/models/assets';
import MineModel from '@/redux/models/mine';

export default function getModels() {
  return [HomeModel, AssetsModel, MineModel];
}
