import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice';

export default function ProductCard({ product }) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favorites);

  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = () => {
    isFavorite
      ? dispatch(removeFavorite(product.id))
      : dispatch(addFavorite(product));
  };

 return (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
   {/* TITLE */}
    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
      {product.title}
    </h3>

    {/* PRICE */}
    <p className="text-lg font-bold text-gray-900 mb-3">
      ₹ {product.price}
    </p>
   
    {/* IMAGE */}
   <div className="h-32 sm:h-40 flex items-center justify-center mb-4">
  <img
    src={product.image}
    alt={product.title}
    className="max-h-full max-w-full object-contain"
  />
</div>

    

    {/* ACTIONS */}
    <div className="flex gap-2 mt-auto">
      <Link
        to={`/product/${product.id}`}
        className="flex-1 text-center border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50"
      >
        View
      </Link>

      <button
        aria-label="add to favorites"
        onClick={toggleFavorite}
        className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-sm hover:bg-blue-700"
      >
        {isFavorite ? 'Remove' : 'Favorite'}
      </button>
    </div>
  </div>
);


}
