import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../features/cart/useCart";
import { useAuth } from "../features/auth/useAuth";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useState } from "react";
import toast from "react-hot-toast";

async function fetchProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    return res.json();
}

export default function ProductDetail() {
    const { user } = useAuth();
    const { id } = useParams();
    const { dispatch } = useCart();

    const [quantity, setQuantity] = useState(1);

    const { data: product, isLoading, isError, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProduct(id),
    });

    if (isLoading) return <Loader />;
    if (isError) return <ErrorMessage message={error.message} />;

    const rating = Math.round(product.rating?.rate || 4);

    function addToCart() {
        // Only allow adding to cart if user is logged in
        if (!user) {
            toast.error("Please login to add items to cart");
            return;
        }

        dispatch({
            type: "ADD_ITEM",
            payload: { ...product, quantity },
        });

        toast.success("Added to cart!");
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* Product Image */}
                <div className="bg-white rounded-xl shadow-md p-10 flex justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-80 object-contain hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-4">

                    <h1 className="text-3xl font-bold text-gray-800">
                        {product.title}
                    </h1>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 text-yellow-400 text-lg">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>
                                {i < rating ? "★" : "☆"}
                            </span>
                        ))}
                        <span className="text-gray-500 text-sm ml-2">
                            ({product.rating?.count || 0} reviews)
                        </span>
                    </div>

                    <p className="text-gray-500 capitalize">
                        Category: {product.category}
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                    </p>

                    <p className="text-3xl font-bold text-blue-600">
                        ${product.price}
                    </p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 mt-2">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            -
                        </button>

                        <span className="text-lg font-semibold">
                            {quantity}
                        </span>

                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart */}
                    <button
                        onClick={addToCart}
                        className="mt-4 w-60 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg shadow transition transform hover:scale-105"
                    >
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
}