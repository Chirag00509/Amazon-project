import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router'
import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider'
import './Subtotal.css'

const Subtotal = () => {

    const [{basket} , dispatch] = useStateValue();
    const history = useHistory();
    return ( 
        <>
            <div className="subtotal">
                <CurrencyFormat
                renderText = {(value) => (
                     <>
                       <p>
                           Subtotal ({basket.length}  items): <strong>{value}</strong>
                       </p>
                       <small className='subtotal_gift'>
                           <input type="checkbox" /> This 
                             order contains a gift
                       </small>
                     </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"} />

                <button onClick={e => history.push('/payment')}>Proceed the Checkout</button>
            </div>
        </>
    )
}

export default Subtotal
