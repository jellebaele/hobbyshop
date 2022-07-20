import { TableCell } from '@mui/material';
import { ShoppingBag, Visibility } from '@mui/icons-material';
import React from 'react';

const TableRowButtons = ({ buttons }) => {
   return (
      <TableCell align="right">
         <div className="buttonContainer">
            <button>
               <Visibility className="icon" />
               Info
            </button>
            <button>
               <ShoppingBag className="icon" />
               Bestel
            </button>
         </div>
      </TableCell>
   );
};

export default TableRowButtons;
