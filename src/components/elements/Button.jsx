import React from 'react';
import './stylesheets/button.scss';

export const Button = ({
   startIcon: StartIcon,
   endIcon: EndIcon,
   onClick,
   className,
   classNameIcon,
   children,
   type = 'button',
}) => {
   return (
      <div className={`customButtonContainer`} onClick={onClick}>
         <button type={type} className={className}>
            {StartIcon && (
               <StartIcon className={`startIcon ${classNameIcon}`} />
            )}
            {children}
            {EndIcon && <EndIcon className={`endIcon ${classNameIcon}`} />}
         </button>
      </div>
   );
};
