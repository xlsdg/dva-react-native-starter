// import _ from 'lodash';
import HomeModel from '@/redux/models/home';
import NewsModel from '@/redux/models/news';
import MineModel from '@/redux/models/mine';

export default function getModels() {
  return [HomeModel, NewsModel, MineModel];
}
