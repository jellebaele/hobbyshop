import React, { useEffect, useRef, useState } from 'react';

const Textarea = ({ name, onChange, register, disabled, className }) => {
   const textareaRef = useRef(null);
   const [value, setValue] = useState('');
   const { ref, ...rest } = register(name, {
      onChange: (e) => setTextareaHeight(e),
   });

   const textAreaChange = (event) => {
      setValue(event.target.value);
      onChange(event.target.value);
   };

   const setTextareaHeight = (e) => {
      if (e && e.target) {
         e.target.style.height = '0px';
         const scrollHeight = e.target.scrollHeight;
         console.log(scrollHeight);
         e.target.style.height = scrollHeight + 'px';
      }
   };

   useEffect(() => {
      if (textareaRef && textareaRef.current) {
         textareaRef.current.style.height = '0px';
         const scrollHeight = textareaRef.current.scrollHeight;
         textareaRef.current.style.height = scrollHeight + 'px';
      }
   }, [value]);

   return (
      <textarea
         ref={(e) => {
            ref(e);
            textareaRef.current = e; // you can still assign to ref
         }}
         onChange={textAreaChange}
         {...rest}
         disabled={disabled}
         className={`${className}`}
      >
         {/* {value} */}
      </textarea>
   );
};

export default Textarea;
