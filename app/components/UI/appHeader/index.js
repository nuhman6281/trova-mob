import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icons from '../../../assets/icons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const iconSize = 22;
export const AppHeader = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Entypo name="menu" size={iconSize} color={colors.black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="search" size={iconSize} color={colors.black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Icons.appLogo} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="md-chatbubble-outline"
          size={iconSize}
          color={colors.black}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="ios-notifications-outline"
          size={iconSize}
          color={colors.black}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
