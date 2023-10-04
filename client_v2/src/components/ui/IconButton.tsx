import '../../assets/styles/components/ui/iconButton.scss';
import React, { ReactElement } from 'react';
import Button from './Button';

type IconButtonProps = {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const IconButton = ({
  iconLeft,
  iconRight,
  onClick,
  className,
  children,
}: IconButtonProps) => {
  return (
    <Button>
      <div className={`iconButtonContainer ${className}`} onClick={onClick}>
        {iconLeft && React.cloneElement(iconLeft, { className: 'icon left' })}
        {children}
        {iconRight &&
          React.cloneElement(iconRight, { className: 'icon right' })}
      </div>
    </Button>
  );
};

export default IconButton;
