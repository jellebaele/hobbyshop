import '../../assets/styles/components/ui/iconButton.scss';
import React, { ReactElement } from 'react';
import Button from './Button';

type IconButtonProps = {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const IconButton = ({
  iconLeft,
  iconRight,
  onClick,
  className,
  type,
  children,
}: IconButtonProps) => {
  return (
    <Button type={type}>
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
