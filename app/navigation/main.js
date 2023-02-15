// @flow
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ROUTES } from '../utils/routes';
import { navigationRef } from './navigationService';
import { AppStack } from './routes';

const Stack = createStackNavigator();

export const Main = props => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerMode: 'screen' }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={ROUTES.App}
          component={AppStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
