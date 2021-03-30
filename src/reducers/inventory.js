import data from "../data.json";

const products=data.products;
const INITIAL_STATE = { ...products };

export default function inventory(store=INITIAL_STATE, action) {
    return store;
}