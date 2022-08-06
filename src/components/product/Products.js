


import React from 'react'
import { useStateValue } from '../CHECKOUT/StateProvider'
import "./products.css"



function Products({id,title,price,img,rating}) {
    const [{basket},dispatch]=useStateValue()
  console.log("this is baskets item ", basket)
const addtocart = () =>{
    dispatch({
        type:"ADD_TO_CART",
        item:{
            id:id,
            title:title,
            image:img,
            price:price,
            rating:rating
        }
    })
    // console.log("dispatch",dispatch)
}


  return (
    <div className='products'>
     <div className='product_info'>
        <p>
           {title}
        </p>
        <p className='product_price'>
            <small>
           RS.
            </small>
            <strong>
            {price}
            <strong>
               .00
            </strong>
            </strong>
        </p>
        <div className='product_rating'>
            {
                Array(rating).fill().map((_,i)=>(
                    <p>
                ⭐
                    </p>
                ))
            }
            <p>
            </p>
           
        </div>
     </div>
        <img src={img} alt="product_img"/>
        <button className='product_button' onClick={addtocart}>Add to Cart</button>
    </div>
  )
}

export default Products
