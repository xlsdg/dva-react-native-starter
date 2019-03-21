// import _ from 'lodash';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { NS_MINE } from '@/redux/namespaces/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

class MineScreen extends React.Component {
  componentDidMount() {
    const that = this;
    console.log('componentDidMount', that.props, that.state);
    // const {  } = that.props;
    // const {  } = that.state;
  }

  render() {
    const that = this;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Mine</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>{JSON.stringify(that.props)}</Text>
      </View>
    );
  }
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
