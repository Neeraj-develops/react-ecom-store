import React from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import './css files/productList.css';

const ProductList = () => {
  return (
    <div className="product-listing ">
      <Title name="In Demand Moblies" />
      <div className="productlisting-wapper">
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default ProductList;
