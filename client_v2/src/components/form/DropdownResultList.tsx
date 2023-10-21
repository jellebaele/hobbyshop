import '../../assets/styles/components/form/dropdownResultList.scss';
import DropdownResult from './DropdownResult';

type DropdownResultListProps = {
  values: string[];
  onClick: (value: string) => void;
  active: boolean;
  reference?: React.RefObject<HTMLDivElement>;
};

const DropdownResultList = ({ values, onClick, active, reference }: DropdownResultListProps) => {
  return (
    <div className={`dropdownResultListContainer ${active ? 'active' : ''}`} ref={reference}>
      <ul>
        {values.map((value, index) => {
          return <DropdownResult key={index} value={value} onClick={onClick} />;
        })}
      </ul>
    </div>
  );
};

export default DropdownResultList;
