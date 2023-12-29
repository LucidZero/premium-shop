// QuantityControl.js
import React from 'react';
import './QuantityControl.css';

const QuantityControl = ({ id, quantity, onQuantityChange }) => {
  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    onQuantityChange(id, newQuantity);
  };

  const handleDecrease = () => {
    const parsedQuantity = Math.max(1, parseInt(quantity) - 1);
    onQuantityChange(id, String(parsedQuantity));
  };

  const handleIncrease = () => {
    const parsedQuantity = parseInt(quantity) + 1;
    onQuantityChange(id, String(parsedQuantity));
  };

  return (
    <div className="quantityControlWithAmount">
      <p className='amount'>Amount: </p>
      <div className="quantityControl">
        <button onClick={handleDecrease}>-</button>
        <input
          type="text"
          style={{
            width: '40px',
            textAlign: 'center',
            border: 'none',
            background: 'transparent',
            appearance: 'textfield',
          }}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default QuantityControl;
