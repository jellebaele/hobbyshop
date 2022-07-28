import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const EmptyRows = ({ page, rowsPerPage, amountOfRows }) => {
   // Avoid a layout jump when reaching the last page with empty rows.
   const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - amountOfRows) : 0;

   return (
      <>
         {emptyRows > 0 && (
            <TableRow
               style={{
                  height: 53 * emptyRows,
               }}
            >
               <TableCell colSpan={6} />
            </TableRow>
         )}
      </>
   );
};

export default EmptyRows;
