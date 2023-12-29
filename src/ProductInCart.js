import React, { useState, useEffect } from 'react';
import './ProductInCart.css';
import data from './productData.json';
import QuantityControl from './QuantityControl';
import ProductPrice from './ProductPrice';

const ProductInCart = () => {
  const products = data.products;
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || []);
  const [total, setTotal] = useState(0);

  // Update cartData whenever localStorage changes
  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem('cartData')) || []);
  }, []);

  useEffect(() => {
    // Calculate the total price of all products in the cart
    let sum = 0;
    cartData.forEach((cartItem) => {
      const product = products.find((product) => product.id === Number(cartItem.id));
      if (product) {
        sum += product.price * Number(cartItem.quantity);
      }
    });
    setTotal(sum);
  }, [products, cartData]);

  return (
    <div className='get-centered'>
      <div className="product-in-cart">
        {cartData.map((cartItem) => {
          const product = products.find((product) => product.id === Number(cartItem.id));
          return product && (
            <div className="product-card-in-cart" key={product.id}>
              <img
                src={require(`./images/productImages/${product.id}.jpg`)}
                alt={product.name}
                className="card-image"
              />
              <div className="first-box">
                <h2 className="product-name">{product.name}</h2>
              </div>
              <div className="second-box">
                <QuantityControl quantity={Number(cartItem.quantity)} onQuantityChange={() => {}} />
              </div>
              <div className="third-box">
                <ProductPrice productId={product.id}/>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout">
        <div className="checkout-amount">
          <p>Total</p> <p>{total}</p>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ProductInCart;
