import '../../assets/styles/components/form/validationError.scss';

type ValidationErrorProps = {
  message?: string;
  className?: string;
};

const ValidationError = ({ message, className }: ValidationErrorProps) => {
  return <div className={`validationErrorContainer ${className}`}>{message}</div>;
};

export default ValidationError;
