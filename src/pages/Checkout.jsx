import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Checkout() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit",
    cardNumber: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function validateEmail(email) {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateCard(card) {
    const cardRegex =
      /^[0-9]{13,19}$/;
    return cardRegex.test(card);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!validateEmail(form.email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (!form.address.trim()) {
      toast.error("Address is required");
      return;
    }

    if (
      form.paymentMethod === "credit" &&
      !validateCard(form.cardNumber)
    ) {
      toast.error("Enter a valid credit card number");
      return;
    }

    toast.success("Order placed successfully!");

    navigate("/order-success");
    dispatch({ type: "CLEAR_CART" });
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6">
      <div className="bg-white p-8 rounded-lg shadow-md">

        <h2 className="text-3xl font-bold mb-6">
          Checkout
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">
              Address
            </label>

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block mb-1 font-medium">
              Payment Method
            </label>

            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="credit">
                Credit Card
              </option>
              <option value="cod">
                Cash on Delivery
              </option>
            </select>
          </div>

          {/* Card Number */}
          {form.paymentMethod === "credit" && (
            <div>
              <label className="block mb-1 font-medium">
                Credit Card Number
              </label>

              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                placeholder="1234123412341234"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition"
          >
            Place Order
          </button>

        </form>
      </div>
    </div>
  );
}