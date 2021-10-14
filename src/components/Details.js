import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import './css files/details.css';
import Title from './Title';
const Details = () => {
  return (
    <div className="details flex-column">
      <Title name={'Mobile-Details'} />

      <ProductConsumer>
        {(value) => {
          const { id, title, img, price, company, info, inCart } = value.detailProduct;
          console.log(id, title, img, price, company, info, inCart);
          return (
            <div className="details-wapper flex-column ">
              <h1 className="details-name">{title}</h1>

              <div className="text-img-wapper flex-row ">
                <img className="details-img" src={img} alt="img" />

                <div className="detail-text flex-column ">
                  <div className="price-company flex-row">
                    <h2 className="details-company">{company}</h2>
                    <h1 className="detail-price">${price}</h1>
                  </div>
                  <p className="detail-info">{info}</p>

                  <div className="details-button ">
                    <Link to="/" className="goback-link">
                      Go To Products
                    </Link>
                    <button
                      className="details-btn"
                      onClick={() => {
                        value.addtoCart(id);
                        value.openModel(id);
                      }}
                      disabled={inCart ? true : false}
                    >
                      {inCart ? 'In Cart' : 'Add To Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </div>
  );
};

export default Details;
