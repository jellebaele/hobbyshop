import React from 'react';
import { MoreVert } from '@mui/icons-material';
import useIsMobile from '../../../../hooks/useIsMobile';
import useIsTablet from '../../../../hooks/useIsTablet';
import './basic-order-row.scss';
import { Status } from '../../../../components/status/Status';
import { TableCell, TableRow } from '@mui/material';
import { IconButton } from '../../../../components/button/IconButton';

const BasicOrderRow = ({ row, handleModalOpen }) => {
   const isMobile = useIsMobile();
   const isTablet = useIsTablet();

   return (
      <>
         <TableRow
            className="tableRowContainer"
            onClick={() => handleModalOpen(row._id)}
         >
            <TableCell component="th" scope="row">
               {row._id}
            </TableCell>
            {!isMobile && <TableCell>{row.orderer}</TableCell>}
            {!isTablet && <TableCell>{row.dateUpdated}</TableCell>}
            <TableCell>
               <Status status={row.status} />
            </TableCell>
            <TableCell align="right">
               <IconButton className="button">
                  <MoreVert />
               </IconButton>
            </TableCell>
         </TableRow>
      </>
   );
};

export default BasicOrderRow;
