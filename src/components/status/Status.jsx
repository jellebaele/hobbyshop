import React from 'react';
import './status.scss';

export const Status = ({ status, children, handleOnClick }) => {
   return (
      <span
         className={`status ${status?.toLowerCase()}`}
         onClick={handleOnClick}
      >
         {children ? children : status}
      </span>
   );
};

export const InputStatus = ({
   name,
   status,
   register,
   className,
   type,
   handleOnClick,
   readOnly = true,
}) => {
   return (
      <input
         className={`status input ${status?.toLowerCase()} ${className}`}
         type={type}
         {...register(name)}
         readOnly={readOnly}
         onClick={handleOnClick}
      />
   );
};
