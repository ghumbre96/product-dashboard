import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts } from '../features/products/productsThunk';
import { selectFilteredProducts } from '../features/products/productsSelectors';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Loader from '../components/Loader';

export default function ProductList() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectFilteredProducts);
  const status = useAppSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <Loader />;

 return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* Search & Filter Section */}
    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm mb-8">
     <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
  <div style={{ marginTop: '10px' }}>
  <SearchBar />
  </div>
<div style={{ marginTop: '10px' }}>
  <FilterBar />
</div>
</div>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

}
