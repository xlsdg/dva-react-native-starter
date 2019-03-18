import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// PageLoading.propTypes = {};

// PageLoading.defaultProps = {};

function PageLoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

export default PageLoading;
