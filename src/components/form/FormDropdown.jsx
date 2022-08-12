import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import FormFieldBasic from './FormFieldBasic';

const FormDropdown = ({
   name,
   type = 'text',
   disabled,
   register,
   error,
   options,
   setValue,
}) => {
   return (
      <>
         <FormFieldBasic error={error}>
            <Dropdown
               options={options}
               onSelect={(newValue) => setValue(name, newValue)}
               register={register}
               name={name}
               disabled={disabled}
               type={type}
            />
         </FormFieldBasic>
      </>
   );
};

export default FormDropdown;
