import React from "react";
import { addToCart, removeFromCart } from "./actions";

describe("Unit tests of action creators", () => {
  it("returns the action for adding an item to cart", function() {
    const id = "47314fa1-ae56-4eae-80be-af6691145951";
    expect(addToCart(id)).toEqual({
      type: 'ADD_TO_CART',
      id: "47314fa1-ae56-4eae-80be-af6691145951"
    });
  });
  it("returns the action for removing an item from cart", function() {
    const id = "47314fa1-ae56-4eae-80be-af6691145951";
    expect(removeFromCart(id)).toEqual({
      type: 'REMOVE_FROM_CART',
      id: "47314fa1-ae56-4eae-80be-af6691145951"
    });
  });
});