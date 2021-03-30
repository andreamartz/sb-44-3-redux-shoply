import cart from "./cart";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes.js"

describe("Unit tests of cart reducer", () => {
  it('should return the initial state', () => {
    expect(cart(undefined, {})).toEqual({});
  });
  it('should handle ADD_TO_CART', () => {
    expect(cart({}, {
      type: ADD_TO_CART,
      id: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"
    })).toEqual({
      "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 1
    });
    expect(cart({
      "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 1
    }, {
      type: "ADD_TO_CART",
      id: "b04b779c-1cfb-48a7-8424-25a8c7e608ae"
    })).toEqual({
      "b04b779c-1cfb-48a7-8424-25a8c7e608ae": 1,
      "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 1
    });
  });
  it('should handle REMOVE_FROM_CART', () => {
    expect(cart({
      "b04b779c-1cfb-48a7-8424-25a8c7e608ae": 1,
      "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 1
    }, {
      type: REMOVE_FROM_CART,
      id: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"
    })).toEqual({
      "b04b779c-1cfb-48a7-8424-25a8c7e608ae": 1
    });
  });
});