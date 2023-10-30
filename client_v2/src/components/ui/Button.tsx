import '../../assets/styles/components/ui/button.scss';

type ButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  children?: React.ReactNode;
};

const Button = ({ onClick, className, type = 'button', children }: ButtonProps) => {
  return (
    <button className={`buttonContainer ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
