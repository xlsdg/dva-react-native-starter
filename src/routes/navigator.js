// import _ from 'lodash';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeTabNavigatorOptions from '@/pages/home/tab';
import HomeStackRouteConfigs from '@/pages/home/screen';

import NewsTabNavigatorOptions from '@/pages/news/tab';
import NewsStackRouteConfigs from '@/pages/news/screen';

import MineTabNavigatorOptions from '@/pages/mine/tab';
import MineScreenRouteConfigs from '@/pages/mine/screen';

function defaultNavigationOptions(props) {
  // const { navigation, navigationOptions, screenProps } = props;
  return {
    // title: ,
    // header: ,
    // headerTitle: ,
    // headerTitleAllowFontScaling: ,
    // headerBackAllowFontScaling: ,
    // headerBackImage: ,
    // headerBackTitle: ,
    // headerTruncatedBackTitle: ,
    // headerRight: ,
    // headerLeft: ,
    // headerStyle: ,
    // headerForceInset: ,
    headerTitleStyle: {
      color: '#222',
    },
    // headerBackTitleStyle: ,
    // headerLeftContainerStyle: ,
    // headerRightContainerStyle: ,
    // headerTitleContainerStyle: ,
    headerTintColor: '#787878',
    // headerPressColorAndroid: ,
    // headerTransparent: ,
    // headerBackground: ,
    // headerBackgroundTransitionPreset: ,
    // gesturesEnabled: ,
    // gestureResponseDistance: ,
    // gestureDirection: ,
    // params: ,
  };
}

const HomeStackConfig = {
  // initialRouteName: ,
  // initialRouteParams: ,
  // initialRouteKey: ,
  defaultNavigationOptions,
  // paths: ,
  // mode: ,
  // headerMode: 'none',
  headerBackTitleVisible: false,
  // headerTransitionPreset: ,
  headerLayoutPreset: 'center',
  // cardStyle: ,
  // cardShadowEnabled: ,
  // cardOverlayEnabled: ,
  // transitionConfig: ,
  // onTransitionStart: ,
  // onTransitionEnd: ,
  // transparentCard: ,
};
export const HomeStack = createStackNavigator(HomeStackRouteConfigs, HomeStackConfig);

const NewsStackConfig = {
  // initialRouteName: ,
  // initialRouteParams: ,
  // initialRouteKey: ,
  defaultNavigationOptions,
  // paths: ,
  // mode: ,
  // headerMode: 'none',
  headerBackTitleVisible: false,
  // headerTransitionPreset: ,
  headerLayoutPreset: 'center',
  // cardStyle: ,
  // cardShadowEnabled: ,
  // cardOverlayEnabled: ,
  // transitionConfig: ,
  // onTransitionStart: ,
  // onTransitionEnd: ,
  // transparentCard: ,
};
export const NewsStack = createStackNavigator(NewsStackRouteConfigs, NewsStackConfig);

const MineScreenConfig = {
  // initialRouteName: ,
  // initialRouteParams: ,
  // initialRouteKey: ,
  defaultNavigationOptions,
  // paths: ,
  // mode: ,
  // headerMode: 'none',
  headerBackTitleVisible: false,
  // headerTransitionPreset: ,
  headerLayoutPreset: 'center',
  // cardStyle: ,
  // cardShadowEnabled: ,
  // cardOverlayEnabled: ,
  // transitionConfig: ,
  // onTransitionStart: ,
  // onTransitionEnd: ,
  // transparentCard: ,
};
export const MineStack = createStackNavigator(MineScreenRouteConfigs, MineScreenConfig);

const BottomTabNavigatorRouteConfigs = {
  HomeStack: {
    screen: HomeStack,
    // path: '',
    navigationOptions: HomeTabNavigatorOptions,
  },
  NewsStack: {
    screen: NewsStack,
    // path: '',
    navigationOptions: NewsTabNavigatorOptions,
  },
  MineStack: {
    screen: MineStack,
    // path: '',
    navigationOptions: MineTabNavigatorOptions,
  },
};

const BottomTabNavigatorConfig = {
  initialRouteName: 'HomeStack',
  // resetOnBlur: false,
  // order: [],
  // paths: ,
  // backBehavior: ,
  // lazy: true,
  // tabBarComponent: ,
  tabBarOptions: {
    activeTintColor: '#222',
    // activeBackgroundColor: '',
    inactiveTintColor: '#777',
    // inactiveBackgroundColor: '',
    showLabel: true,
    showIcon: true,
    style: {
      borderTopWidth: 0,
      ...Platform.select({
        android: {
          elevation: 50,
        },
        ios: {
          shadowColor: '#525072',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
      }),
    },
    // labelStyle: ,
    // tabStyle: ,
    // allowFontScaling: true,
    // safeAreaInset: {
    //   top: 'never',
    //   right: 'never',
    //   bottom: 'always',
    //   left: 'never',
    // },
  },
};

export const BottomTabNavigator = createBottomTabNavigator(BottomTabNavigatorRouteConfigs, BottomTabNavigatorConfig);

export const AppNavigator = BottomTabNavigator;
