import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (userData, thunkAPI) => {
    try {
      const response = await instance.post('/users/login', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const cookieUser = createAsyncThunk(
  'login/cookieUser',
  async (loginData, thunkAPI) => {
    try {
      return loginData;
    } catch (error) {
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
    errorMessage: null, // Nuevo estado para el mensaje de error personalizado

  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
    setUserFromCookie: (state, action) => {
      state.user = action.payload;
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
        state.error = action.error.message;
        state.errorMessage = 'Usuario o contraseña incorrectos'; // Establecer el mensaje de error personalizado
      })
      .addCase(cookieUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
      ;
  },
});

export const { logoutUser } = loginSlice.actions;

export const selectUser = (state) => state.login.user;
export const selectLoginStatus = (state) => state.login.status;
export const selectLoginError = (state) => state.login.error;
export const selectLoginErrorMessage = (state) => state.login.errorMessage; // Nuevo selector para el mensaje de error personalizado


export default loginSlice.reducer;
