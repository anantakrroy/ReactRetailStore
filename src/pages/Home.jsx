import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useCart } from "../features/cart/useCart";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export default function Home() {
    const { dispatch } = useCart();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <Loader />;
    if (isError) return <ErrorMessage message={error.message} />;

    return (
        <div className="max-w-6xl mx-auto mt-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
                    >
                        <Link to={`/products/${product.id}`} className="flex-1">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-40 mx-auto object-contain"
                            />

                            <h3 className="mt-3 font-semibold line-clamp-2">
                                {product.title}
                            </h3>
                        </Link>

                        <p className="mt-2 font-bold">${product.price}</p>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "ADD_ITEM",
                                    payload: product,
                                })
                            }
                            className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}