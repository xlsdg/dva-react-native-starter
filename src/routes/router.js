import _ from 'lodash';
import React from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import PageLoading from '@/components/PageLoading';
import { NS_HOME } from '@/redux/namespaces/index';
import { AppNavigator } from '@/routes/navigator';

const App = createReduxContainer(AppNavigator);

class Router extends React.PureComponent {
  componentWillMount() {
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

    if (router.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const that = this;
    const { dispatch, router } = that.props;
    const { loading } = that.props[NS_HOME];

    return loading ? <PageLoading /> : <App dispatch={dispatch} state={router} />;
  }
}

function mapStateToProps(state) {
  return {
    router: state.router,
    [NS_HOME]: _.cloneDeep(state[NS_HOME]),
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {};
// }

export default connect(mapStateToProps)(Router);
