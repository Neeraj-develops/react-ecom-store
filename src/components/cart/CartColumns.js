import React from 'react';
import '../css files/cartColumn.css';
const CartColumns = () => {
  return (
    <div className="cart-columns flex-row">
      <h1 className="cart-columns-heading">Products</h1>
      <h1 className="cart-columns-heading">Name</h1>
      <h1 className="cart-columns-heading">Price</h1>
      <h1 className="cart-columns-heading">Quantity</h1>
      <h1 className="cart-columns-heading">Remove</h1>
      <h1 className="cart-columns-heading">Total</h1>
    </div>
  );
};

export default CartColumns;
