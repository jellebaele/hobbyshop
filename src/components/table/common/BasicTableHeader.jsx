import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const BasicTableHeader = ({ columns }) => {
   return (
      <TableHead>
         <TableRow>
            {columns.map((column, index) => (
               <TableCell key={`${column.id}_${index}`}>
                  {column.label}
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   );
};

export default BasicTableHeader;
