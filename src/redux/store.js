import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filters/slice';
import storage from 'redux-persist/lib/storage';
import globalReducer from './loading/slice';
import recepiesReducer from './recepies/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authSlice from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    recepies: recepiesReducer,
    filters: filterReducer,
    auth: persistReducer(authPersistConfig, authSlice),
    global: globalReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);