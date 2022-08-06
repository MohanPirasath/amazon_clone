import React from 'react'
import "./home.css"
import Products from '../product/Products'


function Home() {
      // const co = ","
  return (
    <div className='home'>
      <div className='home_container'>
            <img src='https://i.gadgets360cdn.com/large/prime-day-2022-free_1658308645060.png' alt='home_img' className='home_img'/>
      </div>
      <div className='home_row'>
<Products 
id={"121"}
title={"the daddy's long leg"} 
price={110} 
img={'https://img.webnovel.com/bookcover/17571069805555105/300/300.jpg?updateTime=1595752538669'} 
rating={3}/>
<Products
id={"122"}
title={"Panasonic 27L Convection Microwave Oven(NN-CT645BFDG,Black, Magic Grill)"} 
price={12090} 
img={'https://images-eu.ssl-images-amazon.com/images/I/31F59taHaaL._SY445_SX342_QL70_FMwebp_.jpg'} 
rating={4}
/>

      </div>
      <div className='home_row'>
<Products
id={"123"}
title={"LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ASCY, Scarlet Charm, Base stand with Drawer)"} 
price={16690} 
img={'https://m.media-amazon.com/images/I/71PjRr580lL._SL1500_.jpg'} 
rating={3}/>
<Products
id={"124"}
title={"Whirlpool 1.5 Ton 3 Star, Inverter Split AC (1.5T MAGICOOL CONVERT 3S COPR INV, White)"} 
price={32490} 
img={'https://m.media-amazon.com/images/I/41uMPN7SoIL._SX679_.jpg'} 
rating={2}/>
<Products
id={"125"}
title={"Hisense 7.0 Kg Fully-Automatic Front Loading Washing Machine (WFVB7012MS, Silver, Steam Wash, Built in Heater ), ‎Silver"} 
price={24990} 
img={'https://images-eu.ssl-images-amazon.com/images/I/41vwzYma4dL._SX342_SY445_QL70_FMwebp_.jpg'} 
rating={5}/>
      </div>
      
      <div className='home_row'>
      <Products
id={"126"}
title={"AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"} 
price={33999} 
img={'https://m.media-amazon.com/images/I/61NI293PMXL._SX679_.jpg'} 
rating={4}/>

      </div>
    </div>
  )
}

export default Home
