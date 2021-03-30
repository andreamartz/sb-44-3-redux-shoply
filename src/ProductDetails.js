import React from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import Cart from "./Cart";
import CartIcons from "./CartIcons";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "./ProductDetails.css";

function ProductDetails() {
  const store = useSelector(store => store);
  const { id } = useParams();
  const { name, image_url, description, price } =  useSelector(store => store.inventory[id]);
  console.log("IMAGE: ", image_url);

  console.log("ID: ", id);
  console.log("STORE FROM PROD DETS: ", store);
  return (
    <div className="ProductDetails">
      <Card className="ProductDetails-Card">
        <div className="ProductDetails-img-container">
          <CardImg src={image_url} alt="product photo">
          </CardImg>
        </div>

        <CardBody>
          <CardTitle>
            <h3>{name}</h3>
          </CardTitle>
          <CardText>
            <h5>{description}</h5>
            <h6>${price}</h6>
            <CartIcons id={id}/>
          </CardText>
        </CardBody>
      </Card>

    </div>
  )
}

export default ProductDetails;