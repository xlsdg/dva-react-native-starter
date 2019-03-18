import { Animated, Easing } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import App from '@/pages/index';

const HomeNavigator = createBottomTabNavigator({
  Home: { screen: App },
  Account: { screen: App },
});

HomeNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  return {
    headerTitle: routeName,
  };
};

const MainNavigator = createStackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    Detail: { screen: App },
  },
  {
    headerMode: 'float',
  }
);

const RouteConfigs = {
  Main: { screen: MainNavigator },
  Login: { screen: App },
};

const StackNavigatorConfig = {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return {
        opacity,
        transform: [{ translateY }],
      };
    },
  }),
};

export const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);
