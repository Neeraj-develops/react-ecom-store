import React from 'react';

import '../css files/cartlist.css';

import CartItems from './CartItems';
const CartList = ({ value }) => {
  const { cart } = value;
  console.log(value, cart);
  return (
    <div className="cartlist flex-row">
      {cart.map((items) => {
        return (
          <>
            {' '}
            <CartItems key={items.id} items={items} value={value} />
          </>
        );
      })}
    </div>
  );
};

export default CartList;
