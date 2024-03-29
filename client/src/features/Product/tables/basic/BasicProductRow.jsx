import { ShoppingBag } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import useIsMobile from '../../../../hooks/useIsMobile';
import './basic-product-row.scss';
import { IconButton } from '../../../../components/button/IconButton';

const BasicProductRow = ({ row, handleModalOpen }) => {
   const isMobile = useIsMobile();
   return (
      <>
         <TableRow
            className="basicProductTableRowContainer"
            onClick={() => handleModalOpen(row._id)}
         >
            <TableCell component="th" scope="row">
               {row.title}
            </TableCell>
            <TableCell>{row.category}</TableCell>
            {!isMobile && <TableCell>{`${row.amount} ${row.unit}`}</TableCell>}
            <TableCell align="right">
               <div className="buttonContainer">
                  <IconButton className="button">
                     <ShoppingBag />
                  </IconButton>
               </div>
            </TableCell>
         </TableRow>
      </>
   );
};

export default BasicProductRow;
