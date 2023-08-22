import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Робимо хелпери для запису токена, на всі наші запити буде додано хедер "Authorization"
const setToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Робимо хелпер для очистки токена, коли людина натискає вийти
const clearToken = () => {
  API.defaults.headers.common.Authorization = ``;
};

export const regThunk = createAsyncThunk(
  'auth/reg',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('users/login', credentials);
      console.log(data.token);
      setToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.post('users/logout');
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
