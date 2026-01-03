import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { setSearch } from '../features/products/productsSlice';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(value));
    }, 500);

    return () => clearTimeout(timer);
  }, [value, dispatch]);

  return (
    <input
  type="text"
  aria-label="Search products"
  placeholder="Search products..."
className="w-full md:w-1/2 border border-gray-200 rounded-lg px-4 py-2 
           focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
  );
}
