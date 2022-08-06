


import React from 'react'
import "./checkout.css"
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import Checkoutproduct from './checkout_product/Checkoutproduct.js'


function Checkout() {
    const [{basket}, dispatch] = useStateValue()
  return (
    <div className='checkout'>
     <div className='checkout_left'>
        <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='product-image'className='checkout_ad' />
     <div>
        <h2 className='checkout_tittle'>
            your shopping basket
        </h2>

        {basket.map((item,index)=>(
            <Checkoutproduct id={item.id} img={item.image} title={item.title} price={item.price} rating={item.rating}  />
        ))}


     </div>
     </div>
     <div className='checkout_right'>
        <h2><Subtotal/> </h2>
     </div>
    </div>
  )
}

export default Checkout

