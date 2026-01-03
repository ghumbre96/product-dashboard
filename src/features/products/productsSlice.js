import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsThunk';

const initialState = {
  items: [],
  status: 'idle',
  search: '',
  category: 'all',
  sort: 'asc',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
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
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearch, setCategory, setSort } = productsSlice.actions;
export default productsSlice.reducer;
