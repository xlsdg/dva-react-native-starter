import _ from 'lodash';
import React from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import { getActiveRouteName } from '@/utils/helper';

import { AppNavigator } from '@/routes/navigator';

import Screens from './screen';

const App = createReduxContainer(AppNavigator);

class Router extends React.PureComponent {
  constructor() {
    super(...arguments);
    // console.log('constructor', arguments);
    const that = this;

    that.state = {};
    that.subscriptions = {};
    that.lastBackPressed = null;
  }

  componentDidMount() {
    const that = this;
    that.addEventListener(BackHandler, 'hardwareBackPress', that.onBackPress);
  }

  componentWillUnmount() {
    const that = this;
    that.removeEventListener('hardwareBackPress');
  }

  addEventListener = (target, name, fn) => {
    const that = this;

    if (!that.subscriptions[name] && fn) {
      that.subscriptions[name] = target.addEventListener(name, fn);
    }
  };

  removeEventListener = name => {
    const that = this;

    if (that.subscriptions[name] && _.isFunction(that.subscriptions[name].remove)) {
      that.subscriptions[name].remove();
    }
  };

  onBackPress = () => {
    const that = this;
    const { dispatch, router } = that.props;

    const currentScreen = getActiveRouteName(router);
    const screenOptions = Screens[currentScreen];

    let opts = {};
    if (_.isFunction(screenOptions)) {
      opts = screenOptions(that.props);
    } else if (_.isPlainObject(screenOptions)) {
      opts = screenOptions;
    }

    if (_.isFunction(opts.onBackPress)) {
      const ret = opts.onBackPress(that.props);
      if (ret === true) {
        return true;
      }
    }

    switch (currentScreen) {
      case 'Home':
        if (that.lastBackPressed && that.lastBackPressed + 2000 >= _.now()) {
          BackHandler.exitApp();
          return true;
        } else {
          that.lastBackPressed = _.now();
          // showToast(formatMessage({ id: 'exit.app.confirm' }));
          return true;
        }
      default:
        dispatch(NavigationActions.back());
        return true;
    }
  };

  render() {
    const that = this;
    const { dispatch, router } = that.props;

    return <App dispatch={dispatch} state={router} />;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    router: state.router,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
