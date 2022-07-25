import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material';
import React from 'react';

const ProductSubTable = ({ products }) => {
   return (
      <Table size="small">
         <TableHead>
            <TableRow>
               <TableCell>Product</TableCell>
               <TableCell>Aantal</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {products.map((product) => (
               <TableRow key={product.productId}>
                  <TableCell component="th" scope="row">
                     {product.productName}
                  </TableCell>
                  <TableCell>{product.amount}</TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
};

export default ProductSubTable;
