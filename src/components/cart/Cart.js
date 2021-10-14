import React from 'react';
import '../css files/cart.css';
import Title from '../Title';
// import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
    <div className="cart">
      <ProductConsumer>
        {(value) => {
          const { cart } = value;

          if (cart.length > 0) {
            return (
              <>
                <Title name="Your Cart" />
                {/* <CartColumns /> */}
                <CartList value={value} />
                <CartTotal value={value} />
              </>
            );
          } else {
            return (
              <>
                <EmptyCart />{' '}
                <Link className="cart-link" to="/">
                  Go Back
                </Link>
              </>
            );
          }
        }}
      </ProductConsumer>
    </div>
  );
};

export default Cart;
