import React from 'react';
import CartItems from './CartItems';
const CartList = ({ value }) => {
  const { cart } = value;
  console.log(value, cart);
  return (
    <div className="cartlist">
      {cart.map((items) => {
        return <CartItems key={items.id} items={items} value={value} />;
      })}
    </div>
  );
};

export default CartList;
