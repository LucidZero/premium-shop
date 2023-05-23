import React, { useState } from 'react';

const QuantityControl = ({ quantity, onDecrease, onIncrease }) => {
  const [editableQuantity, setEditableQuantity] = useState(quantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setEditableQuantity(newQuantity);
  };

  const handleBlur = () => {
    // Update the quantity when the input loses focus
    const newQuantity = isNaN(editableQuantity) ? quantity : editableQuantity;
    setEditableQuantity(newQuantity);
  };

  const handleDecrease = () => {
    setEditableQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrease = () => {
    setEditableQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
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
        value={editableQuantity}
        onChange={handleQuantityChange}
        onBlur={handleBlur}
      />
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default QuantityControl;
