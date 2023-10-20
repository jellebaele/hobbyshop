import '../../../assets/styles/features/products/dropdownProductStatus.scss';
import { useState } from 'react';
import InputDropdown from '../../../components/form/InputDropdown';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';
import DropdownResultList from '../../../components/form/DropdownResultList';

type DropDownProductStatusProps<T extends FieldValues> = {
  disabled?: boolean;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<FieldValues[string]>;
};

function DropDownProductStatus<T extends FieldValues>({
  register,
  setValue,
  disabled,
}: DropDownProductStatusProps<T>) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOnClick = (statusName: string) => {
    setValue('status', statusName);
  };

  return (
    <div className="dropdownProductStatusContainer">
      <InputDropdown
        name="status"
        label="Status"
        register={register}
        disabled={disabled}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />
      <DropdownResultList
        values={['Actief', 'Inactief']}
        onClick={handleOnClick}
        active={dropdownOpen}
      />
    </div>
  );
}

export default DropDownProductStatus;