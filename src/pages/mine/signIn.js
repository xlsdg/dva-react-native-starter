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

SignInScreen.navigationOptions = props => {
  return {};
};

SignInScreen.propTypes = {};

SignInScreen.defaultProps = {};

function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <Text>SignInPwd</Text>
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

export default connect(mapStateToProps)(SignInScreen);
