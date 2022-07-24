import React from 'react'
import "./Header.css"
import"./App.css"
import SeachIcon from "@mui/material"
import ShoppingBasketIcon from '@mui/icons/ShoppingBasket';
function Header() {
  return (
    <div><div>
          <div className='header'>
              <img
                  className="header_logo"
                  src alt="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
              <div className="header_search">
                  <input
                      className="header_searchInput"
                      type="text" />
              </div>
              <div className="Header_nav">
                  <div className='header_option' />
                  <span className='header_optionLoneOne'>Hello Guest
                  </span>

              </div>
              <div className='header_option' />
              <span className='header_optionLoneOne'>Sign in</span>
          </div>
          <div className='header_option' />

          <span className='header_optionLoneOne'>Your prime</span>

      </div><div className='header_optionBasket' /><ShoppingBasketIcon />
        <span className="header_optionLineTwo
      header_basketCount">0</span>
        </div>

          
   
             


  );
}

export default Header