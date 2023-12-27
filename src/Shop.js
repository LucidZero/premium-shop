import React from 'react';
import Navbar from "./Navbar";
import './Shop.css';
import { ReactComponent as ShopLogo } from '/home/lucid/repos/premium-shop/src/images/shop.svg';
import ProductShowcase from "./ProductShowcase";
import Footer from './Footer.js'; 

const Shop = () => {
  return (
    <div className='shop-page'>
      <div className="navbar-background">
        <Navbar />
        <ShopLogo className="shop-logo" />
      </div>
        <ProductShowcase className="product-showcase"/>
        <Footer />
    </div>
  );
}

export default Shop;

