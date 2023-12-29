import React, { useState } from 'react';
import './AddToCart.css';
import QuantityControl from './QuantityControl';
import ProductPrice from './ProductPrice';
import { useParams } from 'react-router-dom';

const AddToCart = ({ className }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (id, newQuantity) => {
    setQuantity(parseInt(newQuantity));
  };

  const handleAddToCart = () => {
    // Get the current cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cartData.findIndex((product) => product.id === id);

    if (existingProductIndex !== -1) {
      // If the product exists, update the quantity
      cartData[existingProductIndex].quantity = quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      cartData.push({ id, quantity });
    }

    // Store the updated cart data in localStorage
    localStorage.setItem('cartData', JSON.stringify(cartData));
  };

  return (
    <div className={`addToCartButton ${className}`}>
      <div className="priceAboveQuantity">
        <ProductPrice productId={id} />
        <QuantityControl id={id} quantity={quantity} onQuantityChange={handleQuantityChange} />
      </div>
      <button className="addToCartButton" onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default AddToCart;
