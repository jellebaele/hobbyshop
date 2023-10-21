import '../../assets/styles/components/ui/optionList.scss';
import Option from './Option';

type OptionListProps = {
  options: string[];
  onClick?: (option: string) => void;
  active?: boolean;
  reference?: React.RefObject<HTMLDivElement>;
};
const OptionList = ({ options, onClick, active = true, reference }: OptionListProps) => {
  return (
    <div className={`optionListContainer ${active ? 'active' : ''}`} ref={reference}>
      <ul>
        {options.map((option: string, index: number) => {
          return <Option key={index} option={option} onClick={onClick} />;
        })}
      </ul>
    </div>
  );
};

export default OptionList;
