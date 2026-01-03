import productsReducer, {
  setSearch,
  setCategory,
  setSort,
} from './productsSlice';

describe('productsSlice', () => {
  const initialState = {
    items: [],
    status: 'idle',
    search: '',
    category: 'all',
    sort: 'asc',
  };

  test('should return initial state', () => {
    expect(productsReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  test('should handle setSearch', () => {
    const state = productsReducer(initialState, setSearch('shirt'));
    expect(state.search).toBe('shirt');
  });

  test('should handle setCategory', () => {
    const state = productsReducer(initialState, setCategory('electronics'));
    expect(state.category).toBe('electronics');
  });

  test('should handle setSort', () => {
    const state = productsReducer(initialState, setSort('desc'));
    expect(state.sort).toBe('desc');
  });
});
