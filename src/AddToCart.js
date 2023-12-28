import React, { useState } from 'react';
import './AddToCart.css';
import QuantityControl from './QuantityControl';
import ProductPrice from './ProductPrice';
import { useParams } from 'react-router-dom';
const AddToCart = ({ className }) => {

  const { id } = useParams();
  console.log('ProductId:', id);
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className={`addToCartButton ${className}`}>
      <div className="priceAboveQuantity">
        <ProductPrice productId={id} />
        <QuantityControl quantity={quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />
      </div>
      <button className="addToCartButton">Add to cart</button>
    </div>
  );
};

export default AddToCart;
