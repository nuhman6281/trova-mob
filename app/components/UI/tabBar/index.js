import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from '../../../assets/icons';
import { useBookings } from '../../../hooks/useBookings';
import colors from '../../../utils/colors';
import { SERVICE_STATUSES } from '../../../utils/constants';
import { ROUTES } from '../../../utils/routes';

function TabBarIcon({ icon, size = 16, tintColor }) {
  return (
    <Image
      source={icon}
      style={{
        width: size,
        height: size,
        tintColor,
      }}
    />
  );
}

function TabBarButton({ label, isFocused, onPress, onLongPress, routeName }) {
  const { bookings = [] } = useBookings({
    status:
      routeName === ROUTES.PendingBookingsStack
        ? SERVICE_STATUSES.PENDING
        : routeName === ROUTES.ServicesStack
        ? SERVICE_STATUSES.ACTIVE
        : SERVICE_STATUSES.PAYMENT,
  });

  const textDecorationLine = isFocused ? 'underline' : 'none';
  const fontWeight = 'bold';
  const fontColor = colors.white;
  const fontSize = 12;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={{ selected: isFocused }}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarButton}>
      <Animated.Text
        style={{
          color: fontColor,
          fontSize,
          fontWeight,
          textDecorationLine,
        }}>
        {label}
      </Animated.Text>
      {bookings?.length > 0 ? (
        <View style={styles.badge}>
          <Text style={styles.badgeCount}>{bookings?.length}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

function TabBar({ state, descriptors, navigation, position, iconSize }) {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}>
        <TabBarIcon
          icon={Icons.back}
          size={iconSize}
          tintColor={colors.white}
        />
      </TouchableOpacity>
      <View style={{ ...styles.tabBar, ...{ width: '90%' } }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TabBarButton
              key={index}
              label={label}
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              routeName={route.name}
            />
          );
        })}
      </View>
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 8,
  },
  backButtonContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    right: 23,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    padding: 1,
  },
  badgeCount: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
