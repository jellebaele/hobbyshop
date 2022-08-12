import { Paper, Table, TableContainer, TablePagination } from '@mui/material';
import React, { useState } from 'react';
import SortableTableBody from './SortableTableBody';
import useIsMobile from '../../../hooks/useIsMobile';
import SortableTableHeader from '../SortableTableHeader';
import { getComparator } from '../utils/sort';

const SortableTable = ({
   rows,
   initialOrder,
   getColumnLayout,
   Row,
   rowButton,
}) => {
   const [order, setOrder] = useState('asc');
   const [orderBy, setOrderBy] = useState(initialOrder);
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const isMobile = useIsMobile();

   const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
   };

   const handleChangePage = (event, newPage) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   return (
      <div>
         <Paper className="paper">
            <TableContainer>
               <Table>
                  <SortableTableHeader
                     order={order}
                     orderBy={orderBy}
                     onRequestSort={handleRequestSort}
                     columns={getColumnLayout()}
                  />
                  <SortableTableBody
                     rows={rows}
                     page={page}
                     rowsPerPage={rowsPerPage}
                  >
                     {rows
                        .sort(getComparator(order, orderBy))
                        .slice(
                           page * rowsPerPage,
                           page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                           return (
                              <Row row={row}>{rowButton}</Row>

                              //   <ProductRowExtended row={row} key={row._id}>
                              //      {rowButton}
                              //   </ProductRowExtended>
                           );
                        })}
                  </SortableTableBody>
               </Table>
            </TableContainer>
            <TablePagination
               rowsPerPageOptions={isMobile ? [10] : [5, 10, 25]}
               component="div"
               count={rows.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
            />
         </Paper>
      </div>
   );
};

export default SortableTable;
