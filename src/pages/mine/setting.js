// import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { NS_MINE } from '@/redux/namespaces/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

SettingScreen.navigationOptions = props => {
  return {};
};

SettingScreen.propTypes = {};

SettingScreen.defaultProps = {};

function SettingScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
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

export default connect(mapStateToProps)(SettingScreen);
