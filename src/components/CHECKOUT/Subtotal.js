



import React,{useState} from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format';
// import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../CHECKOUT/StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{basket},dispatch]=useStateValue();
  const navigate=useNavigate()
  // const [no_item,setitem]=useState(0);

  return (
    <div className='subtotal'>
      <CurrencyFormat renderText={(value)=>(
        <>
        <p className='p'>
            Subtotal ({basket.length} items):
            <strong>{value}</strong>
        </p>
        <small className='subtotal_gift'>
        <input type="checkbox"  /> This order contains a gift
        </small>
    </>

      )

      }
      decimalScale={2}
      value={getBasketTotal(basket)}
      // value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"RS: "}
      />
      <button onClick={(event)=>navigate("payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal









