// import _ from 'lodash';
// import React from 'react';
// import { StyleSheet, Image } from 'react-native';

import { formatMessage } from '@/utils/helper';

// import ActiveIcon from '@/assets/tabs/mine/active.png';
// import InactiveIcon from '@/assets/tabs/mine/inactive.png';

// const styles = StyleSheet.create({
//   image: {
//     width: 25,
//     height: 25,
//   },
// });

// function renderTabBarIcon({ focused, horizontal, tintColor }) {
//   return <Image style={styles.image} source={focused ? ActiveIcon : InactiveIcon} />;
// }

export default {
  // title: '',
  // tabBarVisible: '',
  // tabBarIcon: renderTabBarIcon,
  tabBarLabel: formatMessage({ id: 'page.mine.tab' }),
  // tabBarButtonComponent: '',
  // tabBarAccessibilityLabel: '',
  // tabBarTestID: '',
  // tabBarOnPress: '',
};
