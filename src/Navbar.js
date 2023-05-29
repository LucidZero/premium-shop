import React from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as ShoppingBag} from './images/shoppingBag.svg';
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
        <Link to="/Shop">Shop</Link>
        <Link to="/FrequentlyAskedQuestions">FAQ</Link>
        <Link to="/Cart"><ShoppingBag className="cart-icon" /></Link>
      </div>
    </div>
  );
}

export default Navbar;
