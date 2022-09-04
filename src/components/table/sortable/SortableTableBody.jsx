import { TableBody } from '@mui/material';
import React from 'react';
import EmptyRows from '../EmptyRows';

const SortableTableBody = ({ rows, page, rowsPerPage, children }) => {
   return (
      <TableBody>
         {children}
         <EmptyRows
            page={page}
            rowsPerPage={rowsPerPage}
            amountOfRows={rows.length}
         />
      </TableBody>
   );
};

export default SortableTableBody;
