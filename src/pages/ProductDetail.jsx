import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productApi';
import { useAppDispatch } from '../app/hooks';
import { addFavorite } from '../features/favorites/favoritesSlice';
import { useAppSelector } from '../app/hooks';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useAppDispatch();
const favorites = useAppSelector((state) => state.favorites.favorites);
const isFavorite = favorites.some((item) => item.id === product?.id);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

 return (
  <div className="max-w-5xl mx-auto px-4 py-8 bg-white rounded-xl shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* IMAGE */}
      <div className="flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 object-contain"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800">
          {product.title}
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {product.description}
        </p>

        <p className="text-xl font-bold mt-4 text-gray-900">
          ₹ {product.price}
        </p>

        <button
          type="button"
          disabled={isFavorite}
          onClick={() => dispatch(addFavorite(product))}
          className={`mt-6 px-6 py-2 rounded-lg text-white text-sm transition
            ${isFavorite 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {isFavorite ? 'Added to Favorites ❤️' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  </div>
);

}
