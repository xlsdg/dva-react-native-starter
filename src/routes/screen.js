import _ from 'lodash';

import HomeScreens from '@/pages/home/screen';
import NewsScreens from '@/pages/news/screen';
import MineScreens from '@/pages/mine/screen';

function pickOptions(screen) {
  return _.mapValues(screen, s => _.get(s, 'screen.screenOptions'));
}

export default {
  ...pickOptions(HomeScreens),
  ...pickOptions(NewsScreens),
  ...pickOptions(MineScreens),
};
