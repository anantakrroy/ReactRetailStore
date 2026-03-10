import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../features/cart/CartContext";

async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Error loading product</p>;

  return (
    <div style={{ maxWidth: "600px" }}>
      <h2>{product.title}</h2>

      <img
        src={product.image}
        alt={product.title}
        style={{ width: "200px" }}
      />

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: product,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}