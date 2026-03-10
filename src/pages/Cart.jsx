import { Link } from "react-router-dom";
import { useCart } from "../features/cart/useCart";

export default function Cart() {
  const { state, dispatch } = useCart();

  const items = state.items;

  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.title}</h3>

          <p>Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_ITEM",
                payload: item.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}