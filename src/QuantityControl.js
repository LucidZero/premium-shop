import React, { useState } from 'react';

const QuantityControl = ({ quantity, onDecrease, onIncrease }) => {
  const [editableQuantity, setEditableQuantity] = useState(String(quantity));

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setEditableQuantity(newQuantity);
  };

  const handleBlur = () => {
    // Update the quantity when the input loses focus
    const newQuantity = editableQuantity === '' ? '1' : editableQuantity && editableQuantity.replace(/^0+/, '');
    setEditableQuantity(newQuantity);
  };

  const handleDecrease = () => {
    setEditableQuantity((prevQuantity) => {
      const parsedQuantity = parseInt(prevQuantity);
      return String(Math.max(1, parsedQuantity - 1));
    });
  };

  const handleIncrease = () => {
    setEditableQuantity((prevQuantity) => {
      const parsedQuantity = parseInt(prevQuantity);
      return String(parsedQuantity + 1);
    });
  };

  return (<div className="quantityControlWithAmount">
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
          value={editableQuantity}
          onChange={handleQuantityChange}
          onBlur={handleBlur}
        />
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default QuantityControl;
