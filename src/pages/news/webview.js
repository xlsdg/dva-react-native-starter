// import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { NS_HOME } from '@/redux/namespaces/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

WebViewScreen.navigationOptions = props => {
  // const { navigation, navigationOptions, screenProps } = props;
  return {};
};

WebViewScreen.propTypes = {};

WebViewScreen.defaultProps = {};

function WebViewScreen(props) {
  return (
    <View style={styles.container}>
      <Text>WebView</Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    [NS_HOME]: state[NS_HOME],
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {};
// }

export default connect(mapStateToProps)(WebViewScreen);
