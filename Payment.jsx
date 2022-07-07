// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
// import axios from "axios";
import Checkout from "./Checkout";


const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    // const stripe = useStripe();
    // const elements = useElements();
    // const history = useHistory();

    // useEffect(() => {
    //   const getClientSecret = async () => {
    //     const response = await axios({
    //        method: 'post',
    //        url : `/payments/create?total=${getBasketTotal(basket)}`,
    //     });
    //     setClientSecret(response.data.clientSecret);
    //   }
    //   getClientSecret();
    // },[basket])

    console.log('The secrect is',clientSecret);

    const handleSubmit = async (e) => {
      e.preventDefault();
    //   setProcessing(true);

    //   const payload = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method : {
    //       card : elements.getElement(CardElement)
    //     }
    //   }).then(({ paymentIntent }) => {
    //     // paymentIntent = payment Conformation
    //     setSucceeded(true)
    //     setError(null)
    //     setProcessing(false)

    //     history.replace('/orders')
    //   })
    };

    const handleChange = (event) => {
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
    };
    return (
        <>
          <div className="payment">
            <div className="payment_container">
              <h1>
                {" "}
                Checkout
                <Link to="/checkout">({basket?.length} Items)</Link>
              </h1>
              <div className="payment_section">
                <div className="payment_title">
                  <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                  <p>{user?.email}</p>
                  <p>G-2 Gopal Krishna Appartment</p>
                  <p>B/H Presidency School</p>
                  <p>New Rander Road Adajan</p>
                  <p>Surat-395009</p>
                </div>
              </div>
              <div className="payment_section">
                <div className="payment_title">
                  <h3>Review Items & Delivery</h3>
                </div>
                <div className="payment_items">
                  {basket.map((item) => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      img={item.img}
                      img_alt={item.img_alt}
                    />
                  ))}
                </div>
              </div>
              <div className="payment_section">
                <div className="payment_title">
                  <h3>Payment Method</h3>
                </div>
                <div className="payment_detail">
                  {
                    <form onClick={handleSubmit}>
                      {/* <CardElement onChange={handleChange} /> */}

                      <div className="payment_priceDetail">
                        <CurrencyFormat
                          renderText={(value) => (
                            <>
                              <h3>
                                Order Total : <strong>{value}</strong>
                              </h3>
                            </>
                          )}
                          decimalScale={2}
                          value={getBasketTotal(basket)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹"}
                        />
                        <button disabled = {processing || disabled || succeeded}>
                          <span>{processing ? <p>Processing</p> : "Buy Now" }</span>
                        </button>
                      </div>
                    </form>
                  }
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default Payment;
