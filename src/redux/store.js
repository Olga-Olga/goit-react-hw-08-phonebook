import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { contactReducer } from './Contacts/slice';
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
import storage from 'redux-persist/lib/storage';

// const persistConfig1 = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };

const persistConfig2 = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

// const persistedReducer1 = persistReducer(persistConfig1, contactReducer);
const persistedReducer2 = persistReducer(persistConfig2, authReducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: { auth: persistedReducer2, contact: contactReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const store2 = configureStore({
//   reducer: { contact: contactReducer, auth: authReducer },
// });

export const persistor = persistStore(store);
