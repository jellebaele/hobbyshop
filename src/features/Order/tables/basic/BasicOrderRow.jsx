// import { Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
// import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Visibility } from '@mui/icons-material';
import useIsMobile from '../../../../hooks/useIsMobile';
import useIsTablet from '../../../../hooks/useIsTablet';
// import ProductSubTable from '../product-table/ProductSubTable';
import './basic-order-row.scss';
import { Button } from '../../../../components/elements/Button';
import { Status } from '../../../../components/elements/Status';
import { TableCell, TableRow } from '@mui/material';

const BasicOrderRow = ({ row, handleModalOpen }) => {
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
                  <Status status={row.status} />
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

export default BasicOrderRow;
