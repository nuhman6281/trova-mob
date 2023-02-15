import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../reducers/index'; // where reducers is a object of reducers
import sagas from '../sagas/index';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  stateReconciler: hardSet,
  debug: true, //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {

});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
