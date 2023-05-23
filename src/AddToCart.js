import React, { useState } from 'react';
import './AddToCart.css';
import QuantityControl from './QuantityControl';

const AddToCart = ({ className }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className={`addToCartButton ${className}`}>
      <QuantityControl quantity={quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />
      <button className="addToCartButton">Add to cart</button>
    </div>
  );
};

export default AddToCart;
