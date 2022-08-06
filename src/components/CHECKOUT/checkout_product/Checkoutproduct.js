


import React from 'react'
import { useStateValue } from '../StateProvider'
import "./checkout_product.css"

function Checkoutproduct({id,img,title,price,rating}) {

    const [{basket},dispatch]=useStateValue()

const remove_from_cart = ()=>{

dispatch({
    type:'REMOVE_FROM_CART',
    id:id,
})

}


  return (
    <div className='checkout_product'>
      <img src={img} className='checkoutProduct_img' alt='Product-image'/>
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>
            {title}
        </p>
        <p className='checkoutProduct_price'>
            <small>RS </small>
            <strong>
            {price}.00
            </strong>
        </p>
        <div className='checkoutProduct_rating'>
            {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
        </div>
            <button onClick={remove_from_cart}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default Checkoutproduct

