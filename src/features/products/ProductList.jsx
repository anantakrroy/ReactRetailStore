import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./api";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(product => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <div className="border p-4 rounded shadow">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}