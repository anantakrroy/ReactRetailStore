import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import { useCart } from "../features/cart/useCart";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { state } = useCart();

  const itemCount = state.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-xl font-bold">
          React Store
        </Link>

        <Link to="/" className="hover:text-gray-300">
          Products
        </Link>

        <Link to="/cart" className="relative inline-flex items-center">
          <ShoppingCartIcon className="h-6 w-6 text-white" />

          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
        </Link>
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm">Hello {user.name}</span>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}