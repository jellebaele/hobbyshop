import { ShoppingBag } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import useIsMobile from '../../../../hooks/useIsMobile';
import { Button } from '../../../../components/elements/Button';
import './basic-row.scss';

const BasicProductRow = ({ row, handleModalOpen }) => {
   const isMobile = useIsMobile();
   return (
      <>
         <TableRow
            className="productTableRowContainer"
            onClick={() => handleModalOpen(row._id)}
         >
            <TableCell component="th" scope="row">
               {row.title}
            </TableCell>
            {!isMobile && <TableCell>{row.category}</TableCell>}
            {!isMobile && <TableCell>{`${row.amount} ${row.unit}`}</TableCell>}
            <TableCell align="right">
               <div className="buttonContainer">
                  <Button
                     onClick={() => handleModalOpen(row._id)}
                     startIcon={ShoppingBag}
                  >
                     Bestel
                  </Button>
               </div>
            </TableCell>
         </TableRow>
      </>
   );
};

export default BasicProductRow;
