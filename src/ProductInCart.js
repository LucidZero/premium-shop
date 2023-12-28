import React from 'react';
import './ProductInCart.css';
import data from './productData.json';
import QuantityControl from './QuantityControl';
import ProductPrice from './ProductPrice';

const ProductInCart = () => {
  const products = data.products;

  return (
    <div className="product-in-cart">
      {products.map((product) => (
        <div className="product-card">
            <img
            src={require(`./images/productImages/${product.id}.jpg`)}
            alt={product.name}
            className="card-image"
          />
          <h2 className="product-name">{product.name}</h2>
        <QuantityControl />
        <ProductPrice />
        </div>

            
      ))}
    </div>
  );
};

export default ProductInCart;