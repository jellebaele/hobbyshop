import React from 'react';
import './status.scss';

const InputStatus = ({
   status,
   name,
   className,
   disabled,
   register,
   handleOnClick,
}) => {
   //    <input
   //       name={name}
   //       type={type}
   //       className={`dropdownInput ${value.toLowerCase()} ${className} ${
   //          open && 'open'
   //       } ${!disabled && 'editable'}`}
   //       {...register(name)}
   //       readOnly
   //       onClick={handleOnClick}
   //    />;

   return (
      <input className={`status ${status?.toLowerCase()}`} value={status} />
   );
};

export default InputStatus;
