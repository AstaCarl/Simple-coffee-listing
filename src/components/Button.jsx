import React, { useState } from 'react';
import './button.css';

export default function Button({ buttonText, onClick, active }) {

  return (
    <button 
    className={`btn ${active ? 'active' : ''}`} onClick={onClick} >
    {buttonText}
</button>
  );
}

