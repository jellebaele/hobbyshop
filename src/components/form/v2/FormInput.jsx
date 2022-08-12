import React from 'react';
import Input from '../../input/Input';
import ValidationError from '../../validation-error/ValidationError';
import './form-input.scss';

const FormInput = ({ name, type = 'text', disabled, register, error }) => {
   return (
      <div className="formInputContainer">
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
