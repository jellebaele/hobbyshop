import React from 'react';
import ValidationError from '../validation-error/ValidationError';
import './form-input-basic.scss';

const FormFieldBasic = ({ children, error, className }) => {
   return (
      <div className={`formInputBasicContainer ${className}`}>
         {children}
         <ValidationError message={error?.message} />
      </div>
   );
};

export default FormFieldBasic;
