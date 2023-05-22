import React from 'react';
import { ReactComponent as Logo } from '/home/lucid/repos/premium-shop/src/images/logo.svg';
import { ReactComponent as ShoppingBag} from '/home/lucid/repos/premium-shop/src/images/shoppingBag.svg';
import './Navbar.css'; // Add the CSS file for Navbar styles
import './fonts.css'; // Add the CSS file for fonts
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/cart"><ShoppingBag className="cart-icon" /></Link>
      </div>
    </div>
  );
}

export default Navbar;
