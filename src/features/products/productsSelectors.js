export const selectProductsState = (state) => state.products;

export const selectFilteredProducts = (state) => {
  const { items, search, category, sort } = state.products;

  let filtered = [...items];

  // Search
  if (search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category
  if (category !== 'all') {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Sort
  filtered.sort((a, b) =>
    sort === 'asc' ? a.price - b.price : b.price - a.price
  );

  return filtered;
};
