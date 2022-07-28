import React from 'react';
import './status.scss';

export const Status = ({ status, children }) => {
   return (
      <span className={`status ${status.toLowerCase()}`}>
         {children ? children : status}
      </span>
   );
};
