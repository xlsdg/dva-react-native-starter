// import _ from 'lodash';
// import React from 'react';
// import { StyleSheet, Image } from 'react-native';

import { formatMessage } from '@/utils/helper';

// import ActiveIcon from '@/assets/tabs/home/active.png';
// import InactiveIcon from '@/assets/tabs/home/inactive.png';

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
  tabBarLabel: formatMessage({ id: 'page.home.tab' }),
  // tabBarButtonComponent: '',
  // tabBarAccessibilityLabel: '',
  // tabBarTestID: '',
  // tabBarOnPress: '',
};
