import React from "react";
import {
  Table
} from "reactstrap";
import { useSelector, shallowEqual } from "react-redux";
import CartIcons from "./CartIcons";
import calcTotalCost from "./helpers";
import "./Cart.css";

function Cart() {
  const { cart, inventory } = useSelector(
    store => store,
    shallowEqual
  );
  const totalCost = calcTotalCost(cart, inventory);
  const cartItemIds = Object.keys(cart);
  console.log("CART RENDERING: ", cart);
  console.log("CART ITEM IDS: ", cartItemIds);

  if (cartItemIds.length === 0) { 
    return <h2>No items in cart!</h2>
  } else {
    return (
      <div className="Cart">
        <h2 className="Cart-heading">Shopping Cart</h2>
        <Table striped>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItemIds.map(id => 
              (<tr>
                <td>{inventory[id].name}</td>
                <td>${inventory[id].price.toFixed(2)}</td>
                <td>{cart[id]}</td>
                <td>
                  <CartIcons id={id}/>
                </td>
              </tr>)
            )}
          </tbody>
        </Table>
        <div className="Cart-totalCost">
          Total Cost: ${totalCost}
        </div>
      </div>
    )
  }
}

export default Cart;