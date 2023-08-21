import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { contactReducer } from './slice';

export const store = configureStore({
  reducer: { contact: contactReducer, auth: authReducer },
});
