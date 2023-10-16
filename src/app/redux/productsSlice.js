import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    console.log(productId);
    const response = await instance.get(`/products/${productId}`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    searchTerm: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action) => {
      const productIndex = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.items[productIndex] = action.payload;
      }
    },
    filterProducts: (state, action) => {
      state.filteredItems = state.items.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    searchTermUpdated: (state, action) => {
      state.searchTerm = action.payload;
    },
    getItems: (state, action) => {
      const product = state.items.find(
        (product) => convertToPath(product.title) === action.payload
      );
      return {
        id: action.payload,
        data: product,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

//Thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await instance.get('/products');
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId) => {
    await instance.delete(`/products/${productId}`);
    return productId;
  }
);

//Selectores
export const selectProducts = (state) => state.products.products;
export const selectSearchTerm = (state) => state.products.searchTerm;
export const selectProductById = (state, productId) => {
  return state.products.selectedProduct;
};
export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, '-');
}
export const {
  addProduct,
  updateProduct,
  filterProducts,
  searchTermUpdated,
  getItems,
} = productsSlice.actions;
export default productsSlice.reducer;