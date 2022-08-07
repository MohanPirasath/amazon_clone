  import React from 'react'
  import "./header.css"
  import SearchIcon from '@mui/icons-material/Search';
  import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Routes, Route, Link } from "react-router-dom";
import { useStateValue } from '../CHECKOUT/StateProvider';



  function Header() {
    const [{basket},dispatch]=useStateValue()
    return (
      <div className='header'>
        <div className='header_content'>
            {/* logo */}
            <Link to="/home">
                <img src='https://www.the-sun.com/wp-content/uploads/sites/6/2022/02/NINTCHDBPICT000561981244.jpg' alt='logo' className='header_logo'/>
              </Link>
            <div className='search_bar'>
                {/* search bar */}
                <div className='search_input'>

                <input type="text" className='header_search'/>
                </div>
                <div className='search_icon'>
                <SearchIcon/>
                </div>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_option_lineon'>
                        hello user
                    </span>
            <Link to="/">
                    <span className='header_option_linedw'>
                        sign out
                    </span>
                    </Link>
                </div>
                <div className='header_option'>
                <span className='header_option_lineon'>
                        Returns
                    </span>
                    <span className='header_option_linedw'>
                        & Orders
                    </span>
                </div>
                <div className='header_option'>
                <span className='header_option_lineon'>
                        your
                    </span>
                    <span className='header_option_linedw'>
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='headerBaskcount'>
                        {basket?.length}
                    </span>
                </div>
                </Link>
               
            </div>
        </div>
      </div>
    )
  }
  
  export default Header
  