import React from 'react';
import '../css files/cartItems.css';
const CartItems = ({ items, value }) => {
  const { id, title, img, price, total, count } = items;
  const { increment, decrement, removeItem } = value;

  // const [size, setSize] = useState(false);
  // const handleResize = () => {
  //   if (window.innerWidth >= 1200) {
  //     setSize(true);
  //   } else {
  //     setSize(false);
  //   }
  // };

  // window.addEventListener('resize', handleResize);

  return (
    <div className="cartitems flex-column">
      {/* {size ? 'hello world' : 'no world it is true if not thernhit me '} */}

      <img src={img} alt="img" className="cartitems-img " />

      <div className="title-proce-wapper flex-row">
        <h1 className="cartitems-title ">{title}</h1>
        <h1 className="cartitems-price ">${price}</h1>
      </div>
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
      <h1 className="cartitems-total ">Total : ${total}</h1>
    </div>
  );
};

export default CartItems;
