import React from "react";
import {
  Button
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

function CartIcons({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  const remove = () => dispatch(removeFromCart(id));

  return (
    <div className="CartIcons">
      <Button color="primary" onClick={add}>+</Button>
      <Button color="danger" onClick={remove}>-</Button>
    </div>
  )
}

export default CartIcons;