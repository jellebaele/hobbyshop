import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import React from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import BasicTableHeader from './BasicTableHeader';

const BasicTable = ({ rows, getColumnLayout, Row, handleModalOpen }) => {
   const isMobile = useIsMobile();
   return (
      <div>
         <TableContainer component={Paper}>
            <Table size={isMobile ? 'small' : 'medium'}>
               <BasicTableHeader columns={getColumnLayout()} />
               <TableBody>
                  {rows.map((row) => (
                     <Row
                        row={row}
                        handleModalOpen={handleModalOpen}
                        key={row._id}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default BasicTable;
