import React from 'react'
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{basket, user} , dispatch] = useStateValue();

    return (
        <>
          <div className="checkout">
              <div className="checkout_left">
                  <img 
                  className='checkout_add' 
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                  alt="Add" />
                  <div>
                  <h3>Hello , {user?.email}</h3>
                  <h2 className="checkout_title">Your Shopping Basket</h2>
                  {basket.map(item => (
                      <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        price = {item.price}
                        rating = {item.rating}
                        img={item.img}
                        img_alt = {item.img_alt}
                      />
                  ))}
              </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
              
          </div>  
        </>
    )
}

export default Checkout
