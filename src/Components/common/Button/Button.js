import React from 'react';
import './Button.css'

const Button = ({text, onClick, customClass, prefix}) => {
  return <div 
        className={`flex absolute-center button-wrapper ${customClass}`} 
        onClick={onClick}>
        {prefix} {text}
  </div>;
};

export default Button;
