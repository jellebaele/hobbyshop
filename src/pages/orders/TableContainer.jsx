import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import React, { useState } from 'react';
import { IconButton } from '../../components/button/IconButton';
import './table-container.scss';

const TableContainer = ({ title, children }) => {
   const [open, setOpen] = useState(false);

   return (
      <div className="tableContainer">
         <div className="top" onClick={() => setOpen(!open)}>
            <h2>{title}</h2>
            <IconButton className="arrowIcon">
               {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
         </div>
         <Collapse in={open} timeout="auto" unmountOnExit>
            {children}
         </Collapse>
      </div>
   );
};

export default TableContainer;
