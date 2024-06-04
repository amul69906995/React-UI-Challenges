import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import storage from 'redux-persist/lib/storage'

import { persistStore, persistReducer } from 'redux-persist'



// Combine your reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});


// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};
// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
export const persistor = persistStore(store);
