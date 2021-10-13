import React from 'react';
import { ProductConsumer } from '../context';
import './css files/model.css';
import { Link } from 'react-router-dom';

const Model = () => {
  return (
    <div>
      <ProductConsumer>
        {(value) => {
          const { modalOpen, openModel, closeModel } = value;
          const { img, title, price, company } = value.modelProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="model-container" onClick={() => closeModel()}>
                <div className="model-content-wapper flex-column">
                  <h1 className="model-added">Added To Cart</h1>
                  <img src={img} alt="img" className="model-img" />
                  <div className="model-price-company flex-column">
                    <h1 className="model-title">{title}</h1>
                    <h1 className="model-price">Price- ${price}</h1>
                  </div>
                  <div className="model-btn-wapper flex-column">
                    <Link to="/" className="model-link-1" onClick={() => closeModel()}>
                      Continue Shopping
                    </Link>
                    <Link to="/cart" className="model-link-2" onClick={() => closeModel()}>
                      Go To Cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    </div>
  );
};

export default Model;
