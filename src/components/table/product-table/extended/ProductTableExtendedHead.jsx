import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { visuallyHidden } from '@mui/utils';
import { productColumnExtendedLayoutDesktop } from '../utils/productTableLayout';

const headCells = productColumnExtendedLayoutDesktop;

const ProductTableExtendedHead = ({ order, orderBy, onRequestSort }) => {
   const handleSortColumn = (property) => (event) => {
      onRequestSort(event, property);
   };

   return (
      <TableHead>
         <TableRow>
            {headCells.map((headCell) => (
               <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  sortDirection={orderBy === headCell.id ? order : false}
               >
                  <TableSortLabel
                     active={orderBy === headCell.id}
                     direction={orderBy === headCell.id ? order : 'asc'}
                     onClick={handleSortColumn(headCell.id)}
                  >
                     {headCell.label}
                     {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                           {order === 'desc'
                              ? 'sorted descending'
                              : 'sorted ascending'}
                        </Box>
                     ) : null}
                  </TableSortLabel>
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   );
};

export default ProductTableExtendedHead;
