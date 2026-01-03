import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          Product Dashboard
        </Link>

        {/* Navigation */}
        <div className="flex gap-3 text-sm font-medium">
          {/* <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
              }`
            }
          >
            Products
          </NavLink> */}

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
              }`
            }
          >
            Favorites Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
