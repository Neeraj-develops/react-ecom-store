import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: [],
    cart: [],
    modalOpen: false,
    modelProduct: [],
    cartSubtot: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProduct = [];
    storeProducts.forEach((items) => {
      const singleItems = { ...items };
      return (tempProduct = [...tempProduct, singleItems]);
    });
    this.setState(() => {
      return { products: tempProduct };
    });
  };

  getItems = (id) => {
    const product = this.state.products.find((items) => items.id === id);
    return product;
  };

  handleDetails = (id) => {
    const product = this.getItems(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addtoCart = (id) => {
    let tempproducts = [...this.state.products];

    const index = this.state.products.indexOf(this.getItems(id));
    const product = this.state.products[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { cart: [...this.state.cart, product], products: [...tempproducts] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModel = (id) => {
    const product = this.getItems(id);
    this.setState(() => {
      return { modelProduct: product, modalOpen: true };
    });
  };
  closeModel = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    let tempPro = [...this.state.cart];
    let selectedProduct = tempPro.filter((ele) => ele.id === id);

    let index = tempPro.indexOf(this.getItems(id));
    let product = tempPro[index];

    product.count = product.count + 1;
    product.total = product.price * product.count;
    this.setState(
      () => {
        return { cart: tempPro };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempPro = [...this.state.cart];
    let selectedProduct = tempPro.filter((ele) => ele.id === id);

    let index = tempPro.indexOf(this.getItems(id));
    let product = tempPro[index];

    if (product.count >= 1) {
      product.count = product.count - 1;
    }
    product.total = product.price * product.count;
    this.setState(
      () => {
        return { cart: tempPro };
      },
      () => {
        this.addTotals();
      }
    );
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((ele) => {
      return ele.id !== id;
    });
    const index = tempProducts.indexOf(this.getItems(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: tempCart,
          product: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearcart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((items) => (subTotal += items.total));
    let tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return { cartSubtot: subTotal, cartTax: tax, cartTotal: total };
    });
  };

  render() {
    // const { products, detailProduct } = this.state;

    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addtoCart: this.addtoCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearcart: this.clearcart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

// import React from 'react';
// const ProductContext = React.createContext();
// const ProductProvider = () => {
//   return <ProductContext.Provider value="hello from the context">{this.props.children}</ProductContext.Provider>;
// };

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
