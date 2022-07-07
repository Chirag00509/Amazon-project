import React from "react";
import { useStateValue } from "../StateProvider";
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, img, img_alt, title, price, rating }) => {

    const [{basket} , dispatch] = useStateValue();
    const remove = () => {
        dispatch({
            type :'REMOVE_FROM_BASKECT',
            id : id
        })
    }
  return (
    <>
      <div className="checkoutProduct">
        <img className="checkoutProduct_img" src={img} alt={img_alt} />
        <div className="checkoutProduct_info">
          <p className="checkoutProdoct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={remove}>Remove from Basket</button>
        </div>
       
      </div>
    </>
  );
};

export default CheckoutProduct;
