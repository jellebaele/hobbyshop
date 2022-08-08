import { MoreVert, ShoppingBag } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Button } from '../../../../components/button/Button';
import { IconButton } from '../../../../components/button/IconButton';
import { Status } from '../../../../components/status/Status';
import useIsMobile from '../../../../hooks/useIsMobile';
import './sortable-product-row.scss';

const SortableProductRow = ({ row, onRowClick }) => {
   const isMobile = useIsMobile();

   return (
      <>
         <TableRow tabIndex={-1} className="productRowExtendedContainer">
            <TableCell component="th" scope="row" padding="normal">
               {row.name}
            </TableCell>
            <TableCell align="left">{row.category}</TableCell>
            {!isMobile && <TableCell align="right">{row.amount}</TableCell>}
            {!isMobile && <TableCell align="left">{row.updatedAt}</TableCell>}
            {!isMobile && (
               <TableCell align="left">
                  <Status status={row.status} />
               </TableCell>
            )}
            <TableCell align="right" sx={{ padding: '6px 10px' }}>
               <div className="buttonContainer">
                  <IconButton className="rowButton more" onClick={onRowClick}>
                     <ShoppingBag />
                  </IconButton>
               </div>
            </TableCell>
         </TableRow>
      </>
   );
};

export default SortableProductRow;
