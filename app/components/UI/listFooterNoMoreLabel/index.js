import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export const ListFooterNoMoreLabel = props => {
  return <Text style={styles.label}>No more service requests</Text>;
};

export default ListFooterNoMoreLabel;

const styles = StyleSheet.create({
  label: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
