// import _ from 'lodash';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeTabNavigatorOptions from '@/pages/home/tab';
import HomeStackRouteConfigs from '@/pages/home/screen';

import AssetsTabNavigatorOptions from '@/pages/assets/tab';
import AssetsStackRouteConfigs from '@/pages/assets/screen';

import MineTabNavigatorOptions from '@/pages/mine/tab';
import MineScreenRouteConfigs from '@/pages/mine/screen';

import WebViewScreen from '@/pages/webview';

const HomeStackConfig = {
  // initialRouteName: ,
  // initialRouteParams: ,
  // initialRouteKey: ,
  // defaultNavigationOptions: ,
  // paths: ,
  // mode: ,
  // headerMode: 'none',
  // headerBackTitleVisible: ,
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
const HomeStack = createStackNavigator(HomeStackRouteConfigs, HomeStackConfig);

const AssetsStackConfig = {
  // initialRouteName: ,
  // initialRouteParams: ,
  // initialRouteKey: ,
  // defaultNavigationOptions: ,
  // paths: ,
  // mode: ,
  // headerMode: 'none',
  // headerBackTitleVisible: ,
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
const AssetsStack = createStackNavigator(AssetsStackRouteConfigs, AssetsStackConfig);

const MineScreenConfig = {
  // initialRouteName: ,
  // initialRouteParams: ,
  // initialRouteKey: ,
  // defaultNavigationOptions: ,
  // paths: ,
  // mode: ,
  // headerMode: 'none',
  // headerBackTitleVisible: ,
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
const MineStack = createStackNavigator(MineScreenRouteConfigs, MineScreenConfig);

const BottomTabNavigatorRouteConfigs = {
  Home: {
    screen: HomeStack,
    // path: '',
    navigationOptions: HomeTabNavigatorOptions,
  },
  Assets: {
    screen: AssetsStack,
    // path: '',
    navigationOptions: AssetsTabNavigatorOptions,
  },
  Mine: {
    screen: MineStack,
    // path: '',
    navigationOptions: MineTabNavigatorOptions,
  },
};

const BottomTabNavigatorConfig = {
  initialRouteName: 'Home',
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
      shadowColor: '#525072',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 50,
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

const BottomTabNavigator = createBottomTabNavigator(BottomTabNavigatorRouteConfigs, BottomTabNavigatorConfig);

const MainScreenRouteConfigs = {
  Tabs: {
    screen: BottomTabNavigator,
    // path: '',
    // navigationOptions: () => ({}),
  },
  WebView: {
    screen: WebViewScreen,
    // path: '',
    // navigationOptions: () => ({}),
  },
};
const MainScreenConfig = {
  initialRouteName: 'Tabs',
  // initialRouteParams: ,
  // initialRouteKey: ,
  // defaultNavigationOptions: ,
  // paths: ,
  // mode: ,
  headerMode: 'none',
  // headerBackTitleVisible: ,
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
export const AppNavigator = createStackNavigator(MainScreenRouteConfigs, MainScreenConfig);
