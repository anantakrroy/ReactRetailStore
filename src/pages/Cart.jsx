import { Link } from "react-router-dom";
import { useCart } from "../features/cart/useCart";
import { TrashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

export default function Cart() {
    const { state, dispatch } = useCart();

    const total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (state.items.length === 0) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl mb-4">Your cart is empty</h2>

                <Link
                    to="/"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto mt-10 px-6">
            <h2 className="text-3xl font-bold mb-6">
                Shopping Cart
            </h2>

            <div className="space-y-6">

                {state.items.map((item) => (

                    <div
                        key={item.id}
                        className="grid grid-cols-[2fr_1fr_1fr_auto] items-center border p-4 rounded shadow gap-3"
                    >

                        <div className="flex items-center gap-4">

                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-16 w-16 object-contain"
                            />

                            <div>
                                <h3 className="font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600">
                                    ${item.price}
                                </p>
                            </div>

                        </div>

                        {/* Quantity Selector */}

                        <div className="flex items-center gap-3">

                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "DECREMENT_QUANTITY",
                                        payload: item.id,
                                    })
                                }
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                -
                            </button>

                            <span className="font-semibold">
                                {item.quantity}
                            </span>

                            <button
                                onClick={() =>
                                    dispatch({
                                        type: "INCREMENT_QUANTITY",
                                        payload: item.id,
                                    })
                                }
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                +
                            </button>

                        </div>

                        <div className="text-center font-bold text-lg transition-all duration-200">
                            ${(item.price * item.quantity).toFixed(2)}
                        </div>

                        <button
                            onClick={() => {
                                dispatch({ type: "REMOVE_ITEM", payload: item.id });
                                toast.error("Item removed from cart!");
                            }}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded transition"
                        >
                            <TrashIcon className="h-6 w-6" />
                        </button>

                    </div>

                ))}

            </div>

            <div className="sticky bottom-0 bg-white border-t mt-10 p-6 flex justify-between items-center shadow-lg">

                <h3 className="text-2xl font-bold">
                    Total: ${total.toFixed(2)}
                </h3>

                <Link
                    to="/checkout"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow transition transform hover:scale-105"
                >
                    Checkout
                </Link>

            </div>

        </div>
    );
}