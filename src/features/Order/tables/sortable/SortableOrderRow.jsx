import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { Status } from '../../../../components/status/Status';
import useIsMobile from '../../../../hooks/useIsMobile';
import useIsTablet from '../../../../hooks/useIsTablet';
import SubProductTable from '../../../Product/tables/small/SubProductTable';
import './sortable-order-row.scss';

const SortableOrderRow = ({ row, children, onClick }) => {
   const [open, setOpen] = useState(false);
   const isMobile = useIsMobile();
   const isTablet = useIsTablet();

   return (
      <>
         <TableRow
            tabIndex={-1}
            className="sortableOrderRowContainer"
            onClick={() => (isMobile || isTablet) && onClick(row._id)}
         >
            {!isTablet && (
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
            <TableCell component="th" scope="row" padding="normal">
               {row._id}
            </TableCell>
            {!isTablet && <TableCell align="left">{row.orderer}</TableCell>}
            {!isTablet && <TableCell align="left">{row.deliverer}</TableCell>}
            <TableCell align="left">
               <Status status={row.status} />
            </TableCell>
            {!isMobile && <TableCell align="left">{row.dateUpdated}</TableCell>}
            <TableCell align="right" sx={{ padding: '6px 10px' }}>
               <div className="buttonContainer">{children}</div>
            </TableCell>
         </TableRow>
         {!isTablet && (
            <TableRow className="sortableOrderSubRowContainer">
               {
                  <TableCell
                     style={{ paddingBottom: 0, paddingTop: 0 }}
                     colSpan={6}
                  >
                     <Collapse in={open} timeout="auto" unmountOnExit>
                        <div className="subTableProduct">
                           <h3 className="subrowTitle">Producten</h3>
                           <SubProductTable products={row.products} />
                        </div>
                     </Collapse>
                  </TableCell>
               }
            </TableRow>
         )}
      </>
   );
};

export default SortableOrderRow;
