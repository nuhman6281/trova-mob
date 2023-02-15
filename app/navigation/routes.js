import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { ROUTES } from '../utils/routes';

import pendingBookings from '../components/pendingBookings';
import TabBar from '../components/UI/tabBar';
import { AppHeader } from '../components/UI/appHeader';
import Services from '../components/services';
import Payments from '../components/payments';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        header: props => <AppHeader {...props} />,
      }}>
      <Stack.Screen name={ROUTES.TabStack} component={TabStack} />
    </Stack.Navigator>
  );
};

const PendingBookingsStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.PendingBookings}
        component={pendingBookings}
      />
    </Stack.Navigator>
  );
};

const ServicesStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.Services}
        component={Services}
      />
    </Stack.Navigator>
  );
};

const PaymentStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.Payments}
        component={Payments}
      />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ swipeEnabled: false }}
      tabBarPosition="top"
      initialRouteName={ROUTES.PendingServicesStack}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={ROUTES.PendingBookingsStack}
        component={PendingBookingsStackScreens}
        options={{ title: 'Requests' }}
      />
      <Tab.Screen
        name={ROUTES.ServicesStack}
        component={ServicesStackScreens}
        options={{ title: 'Services' }}
      />
      <Tab.Screen
        name={ROUTES.PaymentsStack}
        component={PaymentStackScreens}
        options={{ title: 'Payments' }}
      />
    </Tab.Navigator>
  );
};
