import '../../assets/styles/components/form/inputDropdown.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type InputDrownProps = {
  name: string;
  label: string;
  disabled?: boolean;
};

const InputDropdown = ({ name, label, disabled = false }: InputDrownProps) => {
  return (
    <div className={`inputDropdownContainer`}>
      <label htmlFor={name}>{label}</label>
      <div className={`inputContainer ${disabled ? 'disabled' : ''}`}>
        <input
          value="x"
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="searchInput"
          disabled
        />
        <ArrowDropDownIcon className={`icon ${disabled ? 'disabled' : ''}`} />
      </div>
    </div>
  );
};

export default InputDropdown;
