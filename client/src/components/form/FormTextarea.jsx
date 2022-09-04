import React from 'react';
import FormFieldBasic from './FormFieldBasic';
import TextArea from '../textarea/Textarea';

const FormTextarea = ({
   name,
   type = 'text',
   disabled,
   register,
   error,
   setValue,
   getValues,
}) => {
   return (
      <>
         <FormFieldBasic error={error}>
            <TextArea
               name={name}
               onChange={(newValue) => setValue(name, newValue)}
               register={register}
               disabled={disabled}
               initialValue={getValues(name)}
               type={type}
            />
         </FormFieldBasic>
      </>
   );
};

export default FormTextarea;
