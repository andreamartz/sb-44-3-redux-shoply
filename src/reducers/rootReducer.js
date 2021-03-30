import { combineReducers } from "redux";
import cartReducer from './cart';
import inventoryReducer from './inventory';


const rootReducer = combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer 
});

export default rootReducer;