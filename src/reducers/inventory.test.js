import inventory from "./inventory";
import data from "../data.json";

describe("Unit tests of inventory reducer", () => {
  it('should return the initial state', () => {
    expect(inventory(undefined, {})).toEqual(data.products);
  });
});