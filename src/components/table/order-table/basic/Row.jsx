import { Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Visibility } from '@mui/icons-material';
import useIsMobile from '../../../../hooks/useIsMobile';
import useIsTablet from '../../../../hooks/useIsTablet';
// import ProductSubTable from '../product-table/ProductSubTable';
import './stylesheets/row.scss';
import { Button } from '../../../elements/Button';

const Row = ({ row, handleModalOpen }) => {
   const isMobile = useIsMobile();
   const isTablet = useIsTablet();

   return (
      <>
         <TableRow
            className="tableRowContainer"
            onClick={() => handleModalOpen(row._id)}
         >
            {/* {!isMobile && (
               <TableCell>
                  <IconButton
                     aria-label="expand row"
                     size="small"
                     onClick={() => setOpen(!open)}
                  >
                     {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
               </TableCell>
            )} */}
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
                  <Button
                     onClick={() => handleModalOpen(row._id)}
                     startIcon={Visibility}
                  >
                     Toon
                  </Button>
               </div>
            </TableCell>
         </TableRow>
         {/* <TableRow>
            {!isMobile && (
               <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
               >
                  <Collapse in={open} timeout="auto" unmountOnExit>
                     <h3 className="subrowTitle">Producten</h3>
                     <ProductSubTable products={row.products} />
                  </Collapse>
               </TableCell>
            )}
         </TableRow> */}
      </>
   );
};

export default Row;
