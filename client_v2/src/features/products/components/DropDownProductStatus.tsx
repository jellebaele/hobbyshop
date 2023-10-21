import '../../../assets/styles/features/products/dropdownProductStatus.scss';
import { useState } from 'react';
import InputDropdown from '../../../components/form/InputDropdown';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';
import DropdownResultList from '../../../components/form/DropdownResultList';
import { useIsOutsideClick } from '../../../hooks/useIsClickOutside';
import { productStatus } from '../../../models/Product';

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
  const ref = useIsOutsideClick(() => setDropdownOpen(false));

  const handleOnClick = (statusName: string) => {
    setValue('status', statusName);
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dropdownProductStatusContainer" ref={ref}>
      <InputDropdown
        name="status"
        label="Status"
        register={register}
        disabled={disabled}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />
      <DropdownResultList values={productStatus} onClick={handleOnClick} active={dropdownOpen} />
    </div>
  );
}

export default DropDownProductStatus;
