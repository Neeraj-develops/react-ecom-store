import React from 'react';
import { Link } from 'react-router-dom';
import '../css files/cartTotal.css';
const CartTotal = ({ value }) => {
  const { cartSubtot, cartTax, cartTotal, clearcart } = value;
  return (
    <div className="carttotal flex-column">
      <Link to="/">
        <button
          className="cartTotal-btn"
          onClick={() => {
            clearcart();
          }}
        >
          Clear Cart
        </button>
      </Link>
      <h1 className="cartTotal-subTotal">SubTotal : ${cartSubtot}</h1>
      <h1 className="cartTotal-tax">Tax : ${cartTax}</h1>
      <h1 className="cartTotal-total">Total : ${cartTotal}</h1>
      <button className="payment-btn">Make Payment</button>
      <Link className="cart-link" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default CartTotal;
