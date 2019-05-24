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

function Loading(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} />
    </View>
  );
}

// Loading.propTypes = {};

// Loading.defaultProps = {};

export default Loading;
