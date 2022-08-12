import React from 'react';
import ValidationError from '../validation-error/ValidationError';
import Input from './Input';
import './form-input.scss';

const FormInput = ({ label, name, type, disabled, register, error }) => {
   return (
      <div className="inputGroupContainer">
         <label>{label}</label>
         <Input
            name={name}
            type={type}
            disabled={disabled}
            register={register}
         />
         <ValidationError message={error?.message} />
      </div>
   );
};

export default FormInput;
