import React from 'react';
import './validation-error.scss';

const ValidationError = ({ message = '' }) => {
   return <div className="validationError">{message}</div>;
};

export default ValidationError;
