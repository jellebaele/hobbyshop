import React from 'react';
import './icon-button.scss';

export const IconButton = ({
   onClick,
   children,
   className,
   type = 'button',
}) => {
   return (
      <div className="iconButton" onClick={onClick}>
         <button type={type} className={className}>
            {children}
         </button>
      </div>
   );
};
