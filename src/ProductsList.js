import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import Product from "./Product";
import "./ProductsList.css";

/** ProductsList component
 * Purpose: to display the list of products
 */

function ProductsList() {
  const products = useSelector(store => store.inventory, shallowEqual);

  const productIds = Object.keys(products);

  return (
    <div className="ProductsList">
      <h1 className="ProductsList-heading">Our Products</h1>
      <div className="ProductsList-products">
        {productIds.map(id => (
          <Product id={id} key={id} name={products[id].name}/>
        ))}
      </div>
    </div>
  )
}

export default ProductsList;