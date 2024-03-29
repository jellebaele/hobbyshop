import React from 'react';
import FormInput from './FormInput';
import './form-input-group.scss';

const FormInputGroup = ({
   label,
   name,
   type = 'text',
   disabled,
   register,
   error,
   className,
}) => {
   return (
      <div className={`formInputGroupContainer ${className ? className : ''}`}>
         <label>{label}</label>
         <FormInput
            name={name}
            type={type}
            disabled={disabled}
            register={register}
            error={error}
         />
      </div>
   );
};

export default FormInputGroup;
