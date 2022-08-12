import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { Status } from '../../../../components/status/Status';
import SubProductTable from '../../../Product/tables/small/SubProductTable';
import './sortable-order-row.scss';

const SortableOrderRow = ({ row, children }) => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <TableRow tabIndex={-1} className="sortableOrderRowContainer">
            <TableCell>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
               >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row" padding="normal">
               {row._id}
            </TableCell>
            <TableCell align="left">{row.user}</TableCell>
            <TableCell align="left">
               <Status status={row.status} />
            </TableCell>
            <TableCell align="left">{row.dateUpdated}</TableCell>
            <TableCell align="right" sx={{ padding: '6px 10px' }}>
               <div className="buttonContainer">{children}</div>
            </TableCell>
         </TableRow>
         <TableRow>
            {
               <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={6}
               >
                  <Collapse in={open} timeout="auto" unmountOnExit>
                     <h3 className="subrowTitle">Producten</h3>
                     <SubProductTable products={row.products} />
                  </Collapse>
               </TableCell>
            }
         </TableRow>
      </>
   );
};

export default SortableOrderRow;
