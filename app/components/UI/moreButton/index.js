import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../utils/colors';

const MoreButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Feather name="more-horizontal" size={18} color={colors.primary} />
        <Text style={styles.iconLabel}>More</Text>
      </View>
    </TouchableOpacity>
  );
};

const constants = {
  borderRadius: 4,
  padding: 5,
  paddingHorizontal: 15,
  fontSize: 12,
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  button: {},
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: constants.borderRadius,
  },
  iconLabel: {
    fontSize: 10,
    color: colors.primary,
    fontWeight: 'bold',
    bottom: 3,
  },
});

export default MoreButton;
