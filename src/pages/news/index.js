// import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

import { NS_NEWS } from '@/redux/namespaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

NewsScreen.navigationOptions = props => {
  // const { navigation, navigationOptions, screenProps } = props;
  return {
    header: null,
  };
};

NewsScreen.propTypes = {};

NewsScreen.defaultProps = {};

function NewsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>News</Text>
    </SafeAreaView>
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

export default connect(mapStateToProps)(NewsScreen);
