import React from 'react';
import './icon-button.scss';

export const IconButton = ({
   onClick,
   children,
   className,
   type = 'button',
}) => {
   return (
      <button
         type={type}
         className={`iconButton ${className ? className : ''}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
};
