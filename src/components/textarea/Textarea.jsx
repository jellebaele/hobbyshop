import React, { useEffect, useRef, useState } from 'react';

const Textarea = ({ name, onChange, register, disabled, className }) => {
   const textareaRef = useRef(null);
   const [value, setValue] = useState('');

   const textAreaChange = (event) => {
      setValue(event.target.value);
      onChange(event.target.value);
   };

   const setTextareaHeight = () => {
      if (textareaRef && textareaRef.current) {
         textareaRef.current.style.height = '0px';
         const scrollHeight = textareaRef.current.scrollHeight;
         textareaRef.current.style.height = scrollHeight + 'px';
      }
   };

   useEffect(() => {
      setTextareaHeight();
   }, [value]);

   return (
      <textarea
         ref={textareaRef}
         onChange={textAreaChange}
         {...register(name)}
         disabled={disabled}
         className={`${className}`}
      >
         {value}
      </textarea>
   );
};

export default Textarea;
