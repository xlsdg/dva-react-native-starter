// import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { NS_NEWS } from '@/redux/namespaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

HistoryScreen.navigationOptions = props => {
  // const { navigation, navigationOptions, screenProps } = props;
  return {};
};

HistoryScreen.propTypes = {};

HistoryScreen.defaultProps = {};

function HistoryScreen(props) {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    [NS_NEWS]: state[NS_NEWS],
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {};
// }

export default connect(mapStateToProps)(HistoryScreen);