import React from 'react';
import colors from '../../../utils/colors';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { hexToRgbA } from '../../../utils/functions';

export const AppLoader = ({
  loading = false,
  backgroundColor = hexToRgbA(colors?.border, 0.5),
  color = colors?.primary,
}) => {
  return loading ? (
    <View
      style={[
        styles.addressFormLoader,
        backgroundColor
          ? {
              backgroundColor,
            }
          : null,
      ]}>
      <ActivityIndicator
        animating={true}
        size="large"
        color={color ?? colors?.primary}
      />
    </View>
  ) : null;
};

export default AppLoader;

const styles = StyleSheet.create({
  addressFormLoader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: hexToRgbA(colors?.border, 0.5),
  },
});
