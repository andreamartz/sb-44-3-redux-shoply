import React from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import "./ProductDetails.css";

function ProductDetails() {
  const store = useSelector(store => store);
  const { id } = useParams();
  const productName = useSelector(store => store.inventory[id].name);

  console.log("ID: ", id);
  console.log("STORE FROM PROD DETS: ", store);
  return (
    <div className="ProductDetails">
      Product Name: {productName}
    </div>
  )
}

export default ProductDetails;