// import _ from 'lodash';
import MineScreen from './index';
import SignInScreen from './signIn';
import SignInPwdScreen from './signInPwd';
import PayPwdScreen from './payPwd';
import SettingScreen from './setting';
import HelpScreen from './help';
import AboutScreen from './about';

export default {
  Mine: {
    screen: MineScreen,
    // path: '',
    // navigationOptions: () => ({}),
  },
  SignIn: {
    screen: SignInScreen,
    // path: '',
    // navigationOptions: () => ({}),
  },
  SignInPwd: {
    screen: SignInPwdScreen,
    // path: '',
    // navigationOptions: () => ({}),
  },
  PayPwd: {
    screen: PayPwdScreen,
    // path: '',
    // navigationOptions: () => ({}),
  },
  AppSetting: {
    screen: SettingScreen,
    // path: '',
    // navigationOptions: () => ({}),
  },
  AppHelp: {
    screen: HelpScreen,
    // path: '',
    // navigationOptions: () => ({}),
  },
  AboutApp: {
    screen: AboutScreen,
    // path: '',
    // navigationOptions: () => ({}),
  },
};
