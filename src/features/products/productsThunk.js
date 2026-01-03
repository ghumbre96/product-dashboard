import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../services/productApi';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getProducts();
    return response.data;
  }
);
