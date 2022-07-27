import { KeyboardArrowDown } from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import useIsClickOutside from '../../hooks/useIsClickOutside';
import './dropdown.scss';

const Dropdown = ({
   options,
   onSelect,
   register,
   name,
   disabled,
   className,
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

   return (
      <div className="dropdownContainer" ref={ref}>
         {!disabled && (
            <KeyboardArrowDown
               className="dropdownIcon"
               onClick={handleOnClick}
            />
         )}
         <input
            name={name}
            type="text"
            className={`dropdownInput ${className}`}
            {...register(name)}
            readOnly
            onClick={handleOnClick}
         />
         <div className={`dropdownContent ${open && 'active'}`}>
            {options.map((option) => (
               <span key={option} onClick={() => handleOnSelect(option)}>
                  {option}
               </span>
            ))}
         </div>
      </div>
   );
};

export default Dropdown;
