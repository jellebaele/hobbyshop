import { ShoppingBag } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import useIsMobile from '../../../../hooks/useIsMobile';
import './product-row.scss';

const ProductRow = ({ row, handleModalOpen }) => {
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
                  <button onClick={() => handleModalOpen(row._id)}>
                     <ShoppingBag className="icon" />
                     Bestel
                  </button>
               </div>
            </TableCell>
         </TableRow>
      </>
   );
};

export default ProductRow;
