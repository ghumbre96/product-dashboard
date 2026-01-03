import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { setCategory, setSort } from '../features/products/productsSlice';
import { getCategories } from '../services/productApi';

export default function FilterBar() {
  const dispatch = useAppDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
  }, []);

  return (
    <div className="flex gap-4 flex-wrap">
      <select
        className="border p-2 rounded"
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        <option value="all">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
<div style={{ marginLeft: '10px' }}>
      <select
         className="border border-gray-200 rounded-lg px-3 py-2"
        onChange={(e) => dispatch(setSort(e.target.value))}
      >
        <option value="asc">Price: Low → High</option>
        <option value="desc">Price: High → Low</option>
      </select>
      </div>
    </div>
  );
}
