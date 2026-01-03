import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from './favoritesSlice';

describe('favoritesSlice', () => {
  const product = { id: 1, title: 'Test Product' };

  test('should add product to favorites', () => {
    const state = favoritesReducer(
      { favorites: [] },
      addFavorite(product)
    );

    expect(state.favorites.length).toBe(1);
    expect(state.favorites[0]).toEqual(product);
  });

  test('should remove product from favorites', () => {
    const state = favoritesReducer(
      { favorites: [product] },
      removeFavorite(1)
    );

    expect(state.favorites.length).toBe(0);
  });
});
