import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";
import "./Product.css";

/** Product component
 * - clicking on "Add to cart" should add 1 to the qty of that item in the cart
 * - clicking on "Remove from cart" should subtract 1 from the qty of that item in the cart
 */

function Product({ id, name }) {
  // const store = useSelector(store => store);
  console.log("RENDERING PRODUCT");

  return (
    <div className="Product">
      <Card>
        <CardBody>
          <CardTitle>
            <Link to={`/products/${id}`}>
              {name}
            </Link>
          </CardTitle>
          <CardText>
            <CartIcons id={id}/>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Product;