import { useCart } from "../features/cart/useCart";
import { useOrderMutation } from "../hooks/useOrderMutation";
import { useState } from "react";

export default function Checkout() {
  const { state, dispatch } = useCart();
  const mutation = useOrderMutation();
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ ...form, items: state.items }, {
      onSuccess: () => dispatch({ type: "CLEAR_CART" })
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input required placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input required placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input required placeholder="Address" onChange={e => setForm({...form, address:e.target.value})}/>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Place Order
      </button>

      {mutation.isLoading && <p>Submitting...</p>}
      {mutation.isError && <p>Error submitting order</p>}
      {mutation.isSuccess && <p>Order Confirmed!</p>}
    </form>
  );
}