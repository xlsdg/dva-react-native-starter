// import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

import { NS_ASSETS } from '@/redux/namespaces/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AssetsScreen.navigationOptions = props => {
  // const { navigation, navigationOptions, screenProps } = props;
  return {
    header: null,
  };
};

AssetsScreen.propTypes = {};

AssetsScreen.defaultProps = {};

function AssetsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Assets</Text>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    [NS_ASSETS]: state[NS_ASSETS],
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {};
// }

export default connect(mapStateToProps)(AssetsScreen);
