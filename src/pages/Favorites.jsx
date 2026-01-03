import { useAppSelector } from '../app/hooks';
import ProductCard from '../components/ProductCard';

export default function Favorites() {
  const favorites = useAppSelector((state) => state.favorites.favorites);

  if (!favorites.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
        <p className="text-xl">No favorites yet ❤️</p>
        <p className="text-sm mt-2">Add products to see them here</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favorites.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
