import React from 'react';
import './stylesheets/status.scss';

export const Status = ({ status, children }) => {
   return (
      <span className={`status ${status.toLowerCase()}`}>
         {children ? children : status}
      </span>
   );
};
