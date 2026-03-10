import { useMutation } from "@tanstack/react-query";

async function submitOrder(orderData) {
  const response = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit order");
  }

  return response.json();
}

export function useOrderMutation() {
  return useMutation({
    mutationFn: submitOrder,
  });
}