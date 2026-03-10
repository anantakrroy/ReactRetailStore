import { describe, it, expect } from "vitest";
import { cartReducer } from "../features/cart/cartReducer";

describe("Cart Reducer", () => {

  it("adds item to cart", () => {

    const initialState = { items: [] };

    const action = {
      type: "ADD_ITEM",
      payload: {
        id: 1,
        title: "Test Product",
        price: 10,
        quantity: 1
      }
    };

    const newState = cartReducer(initialState, action);

    expect(newState.items.length).toBe(1);
    expect(newState.items[0].quantity).toBe(1);

  });

});