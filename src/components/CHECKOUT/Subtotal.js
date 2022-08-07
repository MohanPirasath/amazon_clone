



import React,{useState} from 'react'
import "./subtotal.css"

import { useStateValue } from '../CHECKOUT/StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{basket},dispatch]=useStateValue();

  const navigate=useNavigate();
 
  return (
    <div className='subtotal'>
      {/* <CurrencyFormat renderText={(value)=>( */}
        <>
        <p className='p'>
            Subtotal ({basket.length} items):
            {/* <strong>{value}</strong> */}
           <span>RS:</span> 
            <strong>{getBasketTotal(basket)}</strong>/-
        </p>
        <small className='subtotal_gift'>
        <input type="checkbox"  /> This order contains a gift
        </small>
    </>

      {/* // ) */}

      {/* } */}
      {/* decimalScale={2}
      value={getBasketTotal(basket)}
      // value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"RS: "} */}
      {/* /> */}
      <button onClick={(event)=>navigate("payment")}>Proceed to Checkout</button>
    </div>
  )
}


const valuereader = ({basket,value,setvalue})=>{
  // const v = basket?.reduce((amount, item) => item.price + amount, 0);
  basket.map((item)=>{
      const v = setvalue(value + item.price)
  console.log("value",v)

  })
  
}

export default Subtotal









