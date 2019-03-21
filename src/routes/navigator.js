import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '@/pages/home/index';
import AssetsScreen from '@/pages/assets/index';
import MineScreen from '@/pages/mine/index';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const AssetsStack = createStackNavigator({
  Assets: AssetsScreen,
});

const MineStack = createStackNavigator({
  Mine: MineScreen,
});

const RouteConfigs = {
  Home: HomeStack,
  Assets: AssetsStack,
  Mine: MineStack,
};

const BottomTabNavigatorConfig = {};

export const AppNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);
