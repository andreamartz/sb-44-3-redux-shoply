const INITIAL_STATE = {};

export default function cart(store=INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return { ...store, [action.id]: ((store[action.id] || 0) + 1)}
    }
    case 'REMOVE_FROM_CART': {
      const cartCopy = { ...store };

      if (!cartCopy[action.id]) {
        return store;
      }
      cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id];
      }
      return cartCopy;
    }
    default: 
      return store;
  }
}