import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});


export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (productId) => {
    try {
      const response = await instance.get(`/products/${productId}`);
      return response.data;  // Assuming the response contains the product details directly
    } catch (error) {
      throw error;
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (formData) => {
    // Aquí se realiza la solicitud POST
    const response = await instance.post('/products', formData);
    return response.data;
  }
);

export const updateProductAsync = createAsyncThunk(
  'products/updateProductAsync',
  async (updatedProduct) => {
    const response = await instance.put(`/products/${updatedProduct.id}`, updatedProduct.body);
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
    selectedProduct: null, // Make sure this field is present
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, body } = action.payload;
      const productIndex = state.items.findIndex((product) => product._id === id);

      if (productIndex !== -1) {
        // Replace the existing product with the updated one
        state.items[productIndex] = { ...state.items[productIndex], ...body };
      }

      // Reset the status
      state.status = 'idle';
    },
    filterProducts: (state, action) => {
      state.filteredItems = state.items.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    searchTermUpdated: (state, action) => {
      state.searchTerm = action.payload;
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
        state.selectedProduct = action.payload; // Corrected line
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';

        // Find and update the product in the state
        const updatedProduct = action.payload;
        const productIndex = state.items.findIndex((product) => product._id === updatedProduct._id);

        if (productIndex !== -1) {
          state.items[productIndex] = updatedProduct;
        }
      })
      .addCase(updateProductAsync.rejected, (state, action) => {
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
export const selectSelectedProduct = (state) => state.products.selectedProduct;
export const selectProducts = (state) => state.products.products;
export const selectSearchTerm = (state) => state.products.searchTerm;
export const selectProductById = (state, productId) => {
  return state.products.selectedProduct;
};
export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, '-');
}
export const {
  updateProduct,
  filterProducts,
  searchTermUpdated,
  getItems,
} = productsSlice.actions;
export default productsSlice.reducer;