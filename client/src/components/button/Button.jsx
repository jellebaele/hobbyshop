import React from 'react';
import './button.scss';

export const Button = ({
  startIcon: StartIcon,
  endIcon: EndIcon,
  onClick,
  className,
  classNameIcon,
  children,
  width,
  type = 'button',
  disabled = false,
}) => {
  return (
    <div className={`customButtonContainer`} style={width && { width: width }}>
      <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {StartIcon && <StartIcon className={`startIcon ${classNameIcon}`} />}
        <div className="textContainer">{children}</div>
        {EndIcon && <EndIcon className={`endIcon ${classNameIcon}`} />}
      </button>
    </div>
  );
};
