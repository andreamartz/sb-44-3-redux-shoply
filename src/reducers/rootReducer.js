import { combineReducers } from "redux";
import cartReducer from './cart';
import inventoryReducer from './inventory';


const rootReducer = combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer 
});

/** store:
 * {
 *   inventory: data.products,    // inventory
 *   cart: {                     // current store of the cart
 *     product1Qty: 2,
 *     product2Qty: 0,
 *     product3Qty: 4,
 *     product4Qty: 1,
 *     product5Qty: 0,
 *     product6Qty: 0 
 *   }
 * }
 */

/** Calculate from store:
 * number of products in the cart
 */

/** action: {
 *    type: ADD_TO_CART,   
 *    cartItem: tv,
 *    qty: 2
 *  } */



// function rootReducer(store=INITIAL_store, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return { ...store, qty: store.qty + 1 }
//     case 'REMOVE_FROM_CART':
//       return { ...store, qty: store.qty - 1 }
//     case 'RESET':
//       return { ...store, }
//     default:
//       return store;
//   }
// }

export default rootReducer;