import React from 'react';
import Input from '../input/Input';
import FormFieldBasic from './FormFieldBasic';

const FormInput = ({
   name,
   type = 'text',
   disabled,
   register,
   error,
   className,
}) => {
   return (
      <>
         <FormFieldBasic error={error} className={className}>
            <Input
               name={name}
               type={type}
               disabled={disabled}
               register={register}
            />
         </FormFieldBasic>
      </>
   );
};

export default FormInput;
