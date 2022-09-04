import React from 'react';
import './input.scss';

const Input = ({ name, type, disabled, className, register = null }) => {
   return (
      <input
         name={name}
         type={type}
         disabled={disabled}
         className={className ? className : 'customInput'}
         {...register(name)}
      />
   );
};

export default Input;
