// import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

import { NS_MINE } from '@/redux/namespaces/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

MineScreen.navigationOptions = props => {
  // const { navigation, navigationOptions, screenProps } = props;
  return {
    header: null,
  };
};

MineScreen.propTypes = {};

MineScreen.defaultProps = {};

function MineScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Mine</Text>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    [NS_MINE]: state[NS_MINE],
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {};
// }

export default connect(mapStateToProps)(MineScreen);
