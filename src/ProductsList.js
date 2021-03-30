import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import Product from "./Product";
import Cart from "./Cart";
import "./ProductsList.css";

/** ProductsList component
 * Purpose: to display the list of products
 */

function ProductsList() {
  const products = useSelector(store => store.inventory, shallowEqual);

  // create product cards
  const productIds = Object.keys(products);
  // const productCards = productIds.map(id => (
    // console.log("PRODUCT NAME: ", products[id].name)
    // <Product id={id} name={products.id.name}/>
  // ));

  return (
    <div className="ProductsList">
      <h1 className="ProductsList-heading">Our Products</h1>
      <Cart />
      <div className="ProductsList-products">
        {productIds.map(id => (
          <Product id={id} key={id} name={products[id].name}/>
        ))}
      </div>
    </div>
  )
}

export default ProductsList;