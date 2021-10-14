import React from 'react';
import { Link } from 'react-router-dom';
import './css files/navbar.css';
import { ProductConsumer } from '../context';
const Navbar = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart } = value;
        const length = cart.length;
        return (
          <div className="navbar">
            <div className="nav-left flex-row">
              <Link to="/" className="nav-link-1 flex-row ">
                <h1 className="nav-logo">
                  <i className="fas fa-mobile-alt"></i>
                </h1>
                <h1 className="nav-heading">React-Shop</h1>
              </Link>
            </div>
            <div className="nav-right flex-row">
              <Link to="/cart" className="nav-link-2 flex-row">
                <h2 className="nav-cart">
                  <i className="fas fa-shopping-cart"></i> Cart <span className="cart-number">{length > 0 ? length : null}</span>
                </h2>
              </Link>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Navbar;
