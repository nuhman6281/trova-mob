import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const Button = ({ title, onPress, type, style }) => {
  const buttonStyles = {
      ...(type === 'primary' ? primaryStyles : styles),
  };
  return (
    <TouchableOpacity style={{...buttonStyles.button,...style,}} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const constants = {
  borderRadius: 4,
  padding: 5,
  paddingHorizontal: 25,
  fontSize: 12,
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: constants.borderRadius,
    padding: constants.padding,
    paddingHorizontal: constants.paddingHorizontal,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText: {
    fontSize: constants.fontSize,
    fontWeight: constants.fontWeight,
    color: colors.primary,
  },
});

const primaryStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: constants.borderRadius,
    padding: constants.padding,
    paddingHorizontal: constants.paddingHorizontal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: constants.fontSize,
    fontWeight: constants.fontWeight,
    color: colors.white,
  },
});

export default Button;
