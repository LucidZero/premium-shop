import React from 'react';
import { ReactComponent as Logo } from '/home/lucid/repos/premium-shop/src/images/logo.svg';
import { ReactComponent as ShoppingBag} from '/home/lucid/repos/premium-shop/src/images/shoppingBag.svg';
import './Navbar.css'; // Add the CSS file for Navbar styles
import './fonts.css'; // Add the CSS file for fonts

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/faq">FAQ</a>
        <a href="/cart"><ShoppingBag className="cart-icon" /></a>
      </div>
    </div>
  );
}

export default Navbar;
