import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});

export const fetchBrandById = createAsyncThunk(
  'brands/fetchBrandById',
  async (brandId) => {
    console.log('Slice brand', brandId);
    const response = await instance.get(`/brands/${brandId}`);
    return response.data;
  }
);

export const fetchBrands = createAsyncThunk(
  'brands/fetchBrands',
  async () => {
    const response = await instance.get('/brands');
    return response.data;
  }
);

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchBrandById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Aquí se agrega la marca encontrada al arreglo de marcas
        state.brands.push(action.payload);
      })
      .addCase(fetchBrandById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default brandsSlice.reducer;