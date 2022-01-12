import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';

import persistedReducers from './modules/reduxPersist';

import rootReducer from './modules/rootReducer';

const store = createStore(
  persistedReducers(rootReducer),
);

export const persistor = persistStore(store);
export default store;
