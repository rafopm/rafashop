
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (userData, thunkAPI) => {
    const [cookies] = useCookies(['userLogin']);
    const { email, roles, token } = cookies.userLogin;
    
    try {
      const response = await instance.post('/users/login', userData);
      console.log("response", response.data);

      const user = {
        email,
        roles,
        token
      };

      thunkAPI.dispatch(loginSlice.actions.setUser(user)); // Establecer los datos en el estado de loginSlice

      return response.data;
    } catch (error) {
      // Puedes manejar errores aquí, por ejemplo, lanzar un error personalizado
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Puedes acceder al mensaje de error desde action.error.message si hay un error
      });
  },
});

export const selectUser = (state) => state.login.user;
export const selectLoginStatus = (state) => state.login.status;
export const selectLoginError = (state) => state.login.error;

export const { setUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;