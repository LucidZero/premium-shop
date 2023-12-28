import React from 'react';
import './ProductInCart.css';
import data from './productData.json';
import QuantityControl from './QuantityControl';
import ProductPrice from './ProductPrice';

const ProductInCart = () => {
  const products = data.products;

  return (
    <div className='get-centered'>
        <div className="product-in-cart">
        {products.map((product) => (
            //Left side, product cards
                <div className="product-card">
                    <img
                    src={require(`./images/productImages/${product.id}.jpg`)}
                    alt={product.name}
                    className="card-image"
                /><div className="first-box">
                        <h2 className="product-name">{product.name}</h2>
                    </div>
                    <div className="second-box">
                        <QuantityControl />
                    </div>
                    <div className="third-box">
                        <ProductPrice />
                    </div>
                </div>
            //Right side, check out
                
        ))}
        </div>
    </div>
  );
};

export default ProductInCart;