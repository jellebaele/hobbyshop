import { TableBody } from '@mui/material';
import React from 'react';
import EmptyRows from '../../../../components/table/EmptyRows';

const SortableProductBody = ({ rows, page, rowsPerPage, children }) => {
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

export default SortableProductBody;
