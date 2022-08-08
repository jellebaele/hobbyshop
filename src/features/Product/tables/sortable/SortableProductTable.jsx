import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import './sortable-product-table.scss';
import SortableTableHeader from '../../../../components/table/SortableTableHeader';
import { getComparator } from '../../../../components/table/utils/sort';
import ProductRowExtended from './SortableProductRow';
import {
   productColumnExtendedLayoutDesktop,
   productColumnExtendedLayoutMobile,
} from '../productTableLayout';
import useIsMobile from '../../../../hooks/useIsMobile';
import TableTitle from '../../../../components/table/TableTitle';
import SortableProductBody from './SortableProductBody';

const rows = [
   {
      _id: 'qvq54vqz1ev3saze',
      name: 'Appels',
      description: '/',
      category: 'Fruit',
      amount: '5',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev3saqsdfsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1e89426v3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz41741ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1767ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev56783sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev327qssazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev3scqsd61azsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev3QCSD1458sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1evCqs65413sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1QCSD164ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev3cqsd6415sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1CSQD6541ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqcqsd6541z1ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1CSQD16+45ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1csqd1645ev3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
   {
      _id: 'qvq54vqz1ev+9816<c<wcx3sazsdfe',
      name: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      status: 'Active',
      updatedAt: '22-07-2022',
   },
];

export default function SortableProductTable({
   title,
   titleButton,
   rowButton,
}) {
   // title, rowButton, onRowClick, titleButton, onTitleClick

   const [order, setOrder] = useState('asc');
   const [orderBy, setOrderBy] = useState('calories');
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const isMobile = useIsMobile();

   const getColumnLayout = () => {
      return isMobile
         ? productColumnExtendedLayoutMobile
         : productColumnExtendedLayoutDesktop;
   };

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
      <div className="productTableExtendedContainer">
         <TableTitle title={title}>{titleButton}</TableTitle>
         <Paper className="paper">
            <TableContainer>
               <Table size={'small'}>
                  <SortableTableHeader
                     order={order}
                     orderBy={orderBy}
                     onRequestSort={handleRequestSort}
                     columns={getColumnLayout()}
                  />

                  <SortableProductBody
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
                              <ProductRowExtended row={row} key={row._id}>
                                 {rowButton}
                              </ProductRowExtended>
                           );
                        })}
                  </SortableProductBody>
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
}
