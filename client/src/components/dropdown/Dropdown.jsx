import { KeyboardArrowDown } from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import useIsClickOutside from '../../hooks/useIsClickOutside';
import { InputStatus } from '../status/Status';
import './dropdown.scss';

const Dropdown = ({
   options,
   onSelect,
   register,
   name,
   disabled,
   className,
   type,
   isStatus = false,
   getValues,
}) => {
   const [open, setOpen] = useState(false);
   const ref = useRef(null);
   useIsClickOutside(ref, () => setOpen(false));

   const handleOnSelect = (option) => {
      onSelect(option);
      setOpen(false);
   };

   const handleOnClick = () => {
      !disabled ? setOpen(!open) : setOpen(false);
   };

   const getInput = () => {
      if (isStatus)
         return (
            <InputStatus
               register={register}
               name={name}
               type={type}
               status={getValues(name)}
               className={`dropdownInput ${className} ${open && 'open'} ${
                  !disabled && 'editable'
               }`}
               readOnly
               onClick={handleOnClick}
            />
         );

      return (
         <input
            name={name}
            type={type}
            className={`dropdownInput ${className} ${open && 'open'} ${
               !disabled && 'editable'
            }`}
            {...register(name)}
            readOnly
            onClick={handleOnClick}
         />
      );
   };

   return (
      <div className="dropdownContainer" ref={ref}>
         {!disabled && (
            <KeyboardArrowDown
               className="dropdownIcon"
               onClick={handleOnClick}
            />
         )}

         {getInput()}

         <div className={`dropdownContent ${open && 'active'}`}>
            {options?.map((option) => (
               <span key={option} onClick={() => handleOnSelect(option)}>
                  {option}
               </span>
            ))}
         </div>
      </div>
   );
};

export default Dropdown;
