import { Delete, Edit } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { IconButton } from '../../../../components/button/IconButton';
import { Status } from '../../../../components/status/Status';
import './sortable-product-row.scss';

const SortableProductRow = ({ row, handleOnDelete, handleOnEdit }) => {
   return (
      <>
         <TableRow tabIndex={-1} className="productRowExtendedContainer">
            <TableCell component="th" scope="row" padding="normal">
               {row.name}
            </TableCell>
            <TableCell align="left">{row.category}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
            <TableCell align="left">{row.updatedAt}</TableCell>
            <TableCell align="left">
               <Status status={row.status} />
            </TableCell>
            <TableCell align="right">
               <div className="buttonContainer">
                  <IconButton
                     className="rowButton"
                     onClick={() => handleOnDelete(row._id)}
                  >
                     <Delete />
                  </IconButton>
                  <IconButton
                     className="rowButton"
                     onClick={() => handleOnEdit(row._id)}
                  >
                     <Edit />
                  </IconButton>
               </div>
            </TableCell>
         </TableRow>
      </>
   );
};

export default SortableProductRow;
