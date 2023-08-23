import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  regThunk,
  refreshThunk,
  logoutThunk,
} from './authOperations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    isLogin: false,
    isRefresh: false,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(regThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLogin = true;
        state.isRefresh = false;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = {
          name: '',
          email: '',
        };
        state.token = '';
        state.isLogin = '';
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
      })
      .addMatcher(isAnyOf(logoutThunk.fulfilled), (state, action) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(logoutThunk.pending), (state, action) => {
        state.isLoading = true;
      });
  },
});

export const authReducer = slice.reducer;
