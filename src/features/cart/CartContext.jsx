import { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer, initialState } from "./cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const savedCart = localStorage.getItem("cart");

  const initialCartState = savedCart
    ? JSON.parse(savedCart)
    : initialState;

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);