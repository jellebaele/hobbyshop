import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import './textarea.scss';

const Textarea = ({
   name,
   onChange,
   register,
   disabled,
   className,
   type = 'text',
}) => {
   const textareaRef = useRef(null);
   const [value, setValue] = useState('');
   const { ref, ...rest } = register(name, {
      onChange: (event) => setTextareaHeight(event),
   });
   const windowSize = useWindowSize();

   const textAreaChange = (event) => {
      setValue(event.target.value);
      onChange(event.target.value);
   };

   const setTextareaHeight = (event) => {
      if (event && event.target) {
         event.target.style.height = '0px';
         const scrollHeight = event.target.scrollHeight;
         event.target.style.height = scrollHeight + 'px';
      }
   };

   useEffect(() => {
      if (textareaRef && textareaRef.current) {
         textareaRef.current.style.height = '0px';
         const scrollHeight = textareaRef.current.scrollHeight;
         textareaRef.current.style.height = scrollHeight + 'px';
      }
   }, [value, windowSize, disabled]);

   return (
      <textarea
         ref={(e) => {
            ref(e);
            textareaRef.current = e; // you can still assign to ref
         }}
         onChange={textAreaChange}
         {...rest}
         disabled={disabled}
         className={`textareaContainer ${className}`}
         type={type}
      ></textarea>
   );
};

export default Textarea;
