import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const TableHeader = ({ columns }) => {
   return (
      <TableHead>
         <TableRow>
            {columns.map((column, index) => (
               <TableCell key={`${column.name}_${index}`}>
                  {column.name}
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   );
};

export default TableHeader;
