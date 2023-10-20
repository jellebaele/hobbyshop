import '../../assets/styles/components/ui/roundButtons.scss';
import React from 'react';
import Button from './Button';

type RoundButtonProps = {
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
};

const RoundButton = ({ onClick, className, children }: RoundButtonProps) => {
  return (
    <Button className={`roundButton ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
};

export default RoundButton;
