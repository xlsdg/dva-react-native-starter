// import _ from 'lodash';
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Loading.propTypes = {};

// Loading.defaultProps = {};

function Loading(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} />
    </View>
  );
}

export default Loading;
