import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-6">
      <div className="bg-white p-10 rounded-lg shadow-md text-center max-w-md">

        <div className="text-green-500 text-5xl mb-4">
          ✓
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Order Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}