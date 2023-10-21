import '../../assets/styles/components/ui/option.scss';

type OptionProps = {
  option: string;
  onClick?: (option: string) => void;
};
const Option = ({ option, onClick }: OptionProps) => {
  return (
    <li className="optionLi" onClick={() => onClick && onClick(option)}>
      {option}
    </li>
  );
};

export default Option;
