import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});

// Thunks
export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (userData) => {
    const response = await instance.post('/users', userData);
    return response.data;
  }
);

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await instance.get('/users');
    return response.data;
  }
);

export const searchUsersByName = createAsyncThunk(
  'users/searchUsersByName',
  async (name) => {
    const response = await instance.get(`/users?name=${name}`);
    return response.data;
  }
);

export const searchUsersByDni = createAsyncThunk(
  'users/searchUsersByDni',
  async (dni) => {
    const response = await instance.get(`/users?dni=${dni}`);
    return response.data;
  }
);

export const searchUsersById = createAsyncThunk(
  'users/searchUsersById',
  async (id) => {
    const response = await instance.get(`/users/${id}`);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    searchTerm: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchUsersByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchUsersByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(searchUsersByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchUsersByDni.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchUsersByDni.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(searchUsersByDni.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchUsersById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchUsersById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(searchUsersById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectUsers = (state) => state.users.items;
export const selectSearchTerm = (state) => state.users.searchTerm;
export const selectStatus = (state) => state.users.status;

export default userSlice.reducer;