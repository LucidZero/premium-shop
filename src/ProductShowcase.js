import React from 'react';
import './ProductShowcase.css';
import data from './productData.json';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  // Assuming you have an array of products in your JSON data
  const products = data.products;

  return (
    <div className="product-showcase">
      {products.map((product) => (
        <Link key={product.id} to={`/shop/${product.id}`} className="product-card">
          <img
            src={require(`./images/productImages/${product.id}.jpg`)}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-name">{product.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default ProductShowcase;
