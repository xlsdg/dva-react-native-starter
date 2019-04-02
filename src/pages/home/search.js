// import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

import { NS_HOME } from '@/redux/namespaces/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

SearchScreen.navigationOptions = props => {
  return {
    header: null,
  };
};

SearchScreen.propTypes = {};

SearchScreen.defaultProps = {};

function SearchScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search</Text>
    </SafeAreaView>
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

export default connect(mapStateToProps)(SearchScreen);
