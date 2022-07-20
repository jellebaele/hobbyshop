import {
   Collapse,
   IconButton,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Edit, Visibility } from '@mui/icons-material';
import './row.scss';
import useIsMobile from '../../../hooks/useIsMobile';
import useIsTablet from '../../../hooks/useIsTablet';

const Row = ({ row }) => {
   const [open, setOpen] = useState(false);
   const isMobile = useIsMobile();
   const isTablet = useIsTablet();

   return (
      <>
         <TableRow>
            {!isMobile && (
               <TableCell>
                  <IconButton
                     aria-label="expand row"
                     size="small"
                     onClick={() => setOpen(!open)}
                  >
                     {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
               </TableCell>
            )}
            <TableCell component="th" scope="row">
               {row._id}
            </TableCell>
            {!isMobile && <TableCell>{row.user}</TableCell>}
            {!isTablet && <TableCell>{row.dateUpdated}</TableCell>}
            {!isMobile && (
               <TableCell>
                  <span className={`status ${row.status}`}>{row.status}</span>
               </TableCell>
            )}
            <TableCell align="right">
               <div className="buttonContainer">
                  <button>
                     <Visibility className="icon" />
                     Info
                  </button>
                  <button>
                     <Edit className="icon" />
                     Bewerk
                  </button>
               </div>
            </TableCell>
         </TableRow>
         <TableRow>
            {!isMobile && (
               <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
               >
                  <Collapse in={open} timeout="auto" unmountOnExit>
                     <h3 className="subrowTitle">Producten</h3>
                     <Table size="small">
                        <TableHead>
                           <TableRow>
                              <TableCell>Product</TableCell>
                              <TableCell>Aantal</TableCell>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {row.products.map((product) => (
                              <TableRow key={product.productId}>
                                 <TableCell component="th" scope="row">
                                    {product.productId}
                                 </TableCell>
                                 <TableCell>{product.amount}</TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </Collapse>
               </TableCell>
            )}
         </TableRow>
      </>
   );
};

export default Row;
