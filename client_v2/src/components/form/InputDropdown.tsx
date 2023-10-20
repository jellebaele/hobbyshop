import '../../assets/styles/components/form/inputDropdown.scss';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type InputDrownProps<T extends FieldValues> = {
  name: FieldValues[string];
  label: string;
  disabled?: boolean;
  onClick: () => void;
  register: UseFormRegister<T>;
};

function InputDropdown<T extends FieldValues>({
  name,
  label,
  register,
  onClick,
  disabled = false,
}: InputDrownProps<T>) {
  return (
    <div className={`inputDropdownContainer`}>
      <label htmlFor={name}>{label}</label>
      <div className={`inputContainer ${disabled ? 'disabled' : ''}`}>
        <input
          {...register(name)}
          className={`searchInput ${disabled ? 'disabled' : ''}`}
          readOnly
          onClick={() => !disabled && onClick()}
        />
        <ArrowDropDownIcon className={`icon ${disabled ? 'disabled' : ''}`} />
      </div>
    </div>
  );
}

export default InputDropdown;
