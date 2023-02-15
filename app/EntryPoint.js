import * as React from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Main } from './navigation/main.js';
import configureStore from './store/configureStore.js';
import colors from './utils/colors/index.js';

const { persistor, store } = configureStore();

export const EntryPoint = props => {
  return (
    <SafeAreaProvider>
      <StatusBar animated={true} backgroundColor={colors.red} barStyle={'default'} />
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default EntryPoint;
