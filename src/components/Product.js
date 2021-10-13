import React from 'react';
import { Link } from 'react-router-dom';
import './css files/product.css';
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';

const Product = ({ product: { id, img, inCart, title, price } }) => {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <div className="product flex-column  " onClick={() => value.handleDetails(id)}>
            <Link to={`/details`}>
              <img className="product-img" src={img} alt="img" />
            </Link>

            <button
              className="product-btn"
              onClick={() => {
                value.addtoCart(id);
                value.openModel(id);
              }}
              disabled={inCart ? true : false}
            >
              {inCart ? <p disabled>In Cart</p> : <i className="fas fa-shopping-cart"></i>}
            </button>

            <div className="product-text flex-row ">
              <h2 className="product-heading">{title}</h2>
              <h1 className="product-heading-1">${price}</h1>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
