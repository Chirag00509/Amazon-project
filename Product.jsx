import React from "react";
import { useStateValue } from "../StateProvider";
import './Product.css'

const Product = ({ id , title,price,rating,img,img_alt}) => {

   const [{basket},dispatch] = useStateValue();
   console.log("basket >>",basket );
  const addBasket = () => {
    dispatch({
      type : "ADD_TO_BASKET",
      item : {
      id  : id,
      title : title,
      price : price,
      rating : rating,
      img  : img,
      img_alt : img_alt,
      },
    })
  }
  return (
    <>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            &#8377;
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
              ))}
          </div>
        </div>
        <img
          src={img}
          alt={img_alt}
        />
        <div className="product_button">
          <button onClick={addBasket}>Add To Basket</button>
        </div>
      </div>
    </>
  );
};

export default Product;
