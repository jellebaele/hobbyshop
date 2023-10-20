import '../../assets/styles/components/form/dropdownResult.scss';

type DropDownResultProps = {
  value: string;
  onClick: (value: string) => void;
};
const DropdownResult = ({ value, onClick }: DropDownResultProps) => {
  return (
    <li className="dropdownLi" onClick={() => onClick(value)}>
      {value}
    </li>
  );
};

export default DropdownResult;
