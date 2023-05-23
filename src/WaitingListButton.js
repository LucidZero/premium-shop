import React from 'react';
import './WaitingList.css';

const WaitingListButton = ({ className }) => {
  return (  
    <button className={`waitingListButton ${className ? className : ''}`}>Get on the waiting list</button>
  );
}

export default WaitingListButton;
