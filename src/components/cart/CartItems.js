import React from 'react';
import '../css files/cartItems.css';
const CartItems = ({ items, value }) => {
  const { id, title, img, price, total, count } = items;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="cartitems flex-row">
      <img src={img} alt="img" className="cartitems-img cart-columns-heading" />
      <h1 className="cartitems-title ">{title}</h1>
      <h1 className="cartitems-price ">${price}</h1>
      <div className="inc-dec-wapper  flex-row">
        <button className="increment" onClick={() => increment(id)}>
          +
        </button>
        <h3 className="count-value">{count}</h3>
        <button className="decrement" onClick={() => decrement(id)}>
          -
        </button>
      </div>
      <button className="remove-item " onClick={() => removeItem(id)}>
        <i className="fas fa-trash"></i>
      </button>
      <h1 className="cartitems-total ">${total}</h1>
    </div>
  );
};

export default CartItems;
