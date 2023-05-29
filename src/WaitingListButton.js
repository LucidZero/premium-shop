import React, { useState } from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import './WaitingList.css';
import emailjs from '@emailjs/browser';

export const WaitingListButton = ({ className, onClick, product }) => {
  const productObject = product ? product : null;

  const handleClick = () => {
    if (onClick) {
      onClick(productObject);
    }
  };

  return (
    <button className={`waitingListButton ${className ? className : ''}`} onClick={handleClick}>
      Get on the waiting list
    </button>
  );
};


const WaitingListPopup = ({ onClose, productObject }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showRequirements, setShowRequirements] = useState(false); // Track whether to show email requirements

  const handleBackgroundClick = () => {
    onClose();
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage(''); // Clear error message when user modifies email
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      if (!showRequirements) {
        setShowRequirements(true);
      }
      return;
    }
  
    try {
      const recipientName = email.split("@")[0];

      const templateParams = {
        email_to: email,
        recipientName: recipientName,
        productName: productObject.name,
        itemID: productObject.id,
      };
      
      console.log('Product Name:', productObject.name);
      console.log('Item ID:', productObject.id);
  
      await emailjs.send('service_x5shc7a', 'template_uqz7mhb', templateParams, 'TBi1eTUR4OmcFbrD0');
      onClose();
    console.log('Recipient Name:', templateParams.recipientName);
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Oops! Something went wrong with the server. Please try again later.');
    }
  };
  
  
  

  const emailRequirements =
    'Email requirements:\n' +
    '- Must contain an @ symbol\n' +
    '- Must have at least one character before and after the @ symbol\n' +
    '- Must have a period and at least one character after the @ symbol';

  return (
    <div className="pop-up-background" onClick={handleBackgroundClick}>
      <div className="waiting-list-popup" onClick={handlePopupClick}>
        <div className="close-button" onClick={onClose}>
          X
        </div>
        <Logo />
        <form onSubmit={(event) => handleSubmit(event, productObject)}>

        {showRequirements && !errorMessage && <div className="email-requirements">{emailRequirements}</div>}
  {errorMessage && <div className="error-message">{errorMessage}</div>}
          <input
            className="email-input-field"
            type="text"
            placeholder={errorMessage ? errorMessage : 'Email'}
            value={email}
            onChange={handleEmailChange}
          />
        <button type="submit" className="submit-button-waiting-list">
          Submit
        </button>

        </form>
      </div>
    </div>
  );
};

const PopUpWindow = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <WaitingListButton onClick={() => handleOpenPopup(product)} product={selectedProduct} />
      {isPopupOpen && <WaitingListPopup onClose={handleClosePopup} productObject={selectedProduct} />}
    </div>
  );
};

export default PopUpWindow;
