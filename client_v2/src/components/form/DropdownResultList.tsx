import '../../assets/styles/components/form/dropdownResultList.scss';
import DropdownResult from './DropdownResult';

type DropdownResultListProps = {
  values: string[];
  onClick: (value: string) => void;
  active: boolean;
};

const DropdownResultList = ({ values, onClick, active }: DropdownResultListProps) => {
  return (
    <div className={`dropdownResultListContainer ${active ? 'active' : ''}`}>
      <ul>
        {values.map((value, index) => {
          return <DropdownResult key={index} value={value} onClick={onClick} />;
        })}
      </ul>
    </div>
  );
};

export default DropdownResultList;
