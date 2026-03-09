import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetail from "../features/products/ProductDetail";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/products/:id", element: <ProductDetail /> },
  { path: "/cart", element: <Cart /> },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    )
  }
]);