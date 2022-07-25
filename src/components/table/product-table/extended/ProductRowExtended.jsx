import { Delete, Edit } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import './stylesheets/product-row-extended.scss';

const ProductRowExtended = ({ row, handleOnDelete }) => {
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
               <div className={`status ${row.status}`}>{row.status}</div>
            </TableCell>
            <TableCell align="right">
               <div className="buttonContainer">
                  <button
                     className="deleteButton"
                     onClick={() => handleOnDelete(row._id)}
                  >
                     <Delete />
                  </button>
                  <button>
                     <Edit className="editButton" />
                  </button>
               </div>
            </TableCell>
         </TableRow>
      </>
   );
};

export default ProductRowExtended;
