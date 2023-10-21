import '../../assets/styles/components/form/inputSearch.scss';
import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form';
import ValidationError from './ValidationError';

type InputSearchProps<T extends FieldValues> = {
  name: FieldValues[string];
  label: string;
  register: UseFormRegister<T>;
  type?: string;
  disabled?: boolean;
  setSearchTerm: (searchTerm: string) => void;
  setSearchBarActive: (searchBarActive: boolean) => void;
  error?: FieldError;
  className?: string;
};

function InputSearch<T extends FieldValues>({
  name,
  label,
  type = 'text',
  disabled,
  register,
  setSearchTerm,
  setSearchBarActive,
  error,
  className,
}: InputSearchProps<T>) {
  console.log(error);
  return (
    <div className={`inputSearchContainer ${className}`}>
      <div className="property">
        <label htmlFor={name}>{label}</label>
        <input
          {...register(name)}
          type={type}
          disabled={disabled}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onClick={() => setSearchBarActive(true)}
        />
      </div>
      <ValidationError message={error?.message} className="validationError" />
    </div>
  );
}

export default InputSearch;
