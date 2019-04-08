import _ from 'lodash';
import React from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import Loading from '@/components/Loading';
import { AppNavigator } from '@/routes/navigator';

const App = createReduxContainer(AppNavigator);

function getActiveRouteName(navigationState) {
  if (!_.isPlainObject(navigationState)) {
    return;
  }

  const route = navigationState.routes[navigationState.index];
  if (_.isArray(route.routes)) {
    return getActiveRouteName(route);
  }

  return route.routeName;
}

class Router extends React.PureComponent {
  // state = {
  //   count: 0,
  //   timer: null,
  // };

  componentDidMount() {
    const that = this;
    BackHandler.addEventListener('hardwareBackPress', that.onBackPress);
  }

  componentWillUnmount() {
    const that = this;
    BackHandler.removeEventListener('hardwareBackPress', that.onBackPress);
  }

  onBackPress = () => {
    const that = this;
    const { dispatch, router } = that.props;

    let hasProc = false;
    const currentScreen = getActiveRouteName(router);
    switch (currentScreen) {
      case 'Home':
      case 'Assets':
      case 'Mine':
        BackHandler.exitApp();
        hasProc = true;
        break;
      default:
        dispatch(NavigationActions.back());
        hasProc = true;
        break;
    }

    return hasProc;
  };

  render() {
    const that = this;
    const { dispatch, router, loading } = that.props;

    return loading.global ? <Loading /> : <App dispatch={dispatch} state={router} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    router: state.router,
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {};
// }

export default connect(mapStateToProps)(Router);
