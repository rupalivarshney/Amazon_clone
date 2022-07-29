import React from 'react'
import "./Header.css"
import"./App.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    
          <div div className='header'>
              <img
                  className="header_logo"
                  src ="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                  />

              <div className="header_search">
                  <input
                      className="header_searchInput"
                      type="text" />
                      <SearchIcon className="Header_searchIcon"/>

              </div>
              <div className="Header_nav">
                  <div className='header_option' />
                 
              </div>
              <div className='header_option' >
                <span className='header_optionLineOne'>Hello guest</span>
              <span className='header_optionLineTwo'>Sign in</span>
          </div>

          <div className="header_option">
            <span className='header_optionLineOne' >Returns</span>
            <span className='header_optionlineTwo'>orders</span>
           </div>
          
           <div className="header_option">
           <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>prime</span>

           </div>
          
      <div className='header_optionBasket' ><ShoppingBasketIcon />
        <span className="header_optionLineTwo
      header_basketCount">0</span>
        </div>

          
</div>
             


  );
}

export default Header