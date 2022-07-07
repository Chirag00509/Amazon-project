import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "./firebase";

const Header = () => {

  const handelAuth = () => {
    if(user){
      auth.signOut();
    }
  }
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="img"
            className="header_img"
          />
        </Link>

        <div className="search_bar">
          <input type="text" className="search_input" />
          <SearchIcon className="search_icon" />
        </div>

        <div className="header_nav">
        <Link to={!user  && "/login"}>
          <div className="header_option" onClick={handelAuth} >
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link> 

          <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Order</span>
          </div>

          <div className="header_option">
            <span className="header_optionLineOne">Your </span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </div>

        <Link to="/checkout">
          <div className="header_shopingcart">
            <ShoppingCartIcon />
            <span className="header_cartCount header_optionLineTwo ">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
