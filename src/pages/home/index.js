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

HomeScreen.navigationOptions = props => {
  // const { navigation, navigationOptions, screenProps } = props;
  return {
    title: 'Hello',
    // headerRight: ,
    headerStyle: {
      borderBottomWidth: 0,
    },
  };
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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

export default connect(mapStateToProps)(HomeScreen);
