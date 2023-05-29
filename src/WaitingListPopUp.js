import React, { useState } from 'react';
import './WaitingListPopUp.css';
import { ReactComponent as Logo } from './images/logo.svg';
import WaitingListButton from './WaitingListButton';

const WaitingListPopUp = ({ className, onClose }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBackgroundClick = () => {
    onClose();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Perform additional actions with the valid email

    onClose(); // Invoke the onClose function to close the popup
  };

  // Email requirements text
  const emailRequirements =
    'Email requirements:\n' +
    '- Must contain an @ symbol\n' +
    '- Must have at least one character before and after the @ symbol\n' +
    '- Must have a period and at least one character after the @ symbol';

  return (
    <div className={`pop-up-background `} onClick={handleBackgroundClick}>
      <div className={`waiting-list-popup `}>
        <Logo />
        <form onSubmit={handleSubmit}>
          <div>{emailRequirements}</div>
          <input
            type='text'
            placeholder={errorMessage ? errorMessage : 'Email'}
            value={email}
            onChange={handleEmailChange}
          />
          <WaitingListButton />
        </form>
      </div>
    </div>
  );
};

export default WaitingListPopUp;
