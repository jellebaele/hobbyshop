import { Paper, Table, TableContainer, TablePagination } from '@mui/material';
import React, { useState } from 'react';
import SortableTable from '../../../../components/table/sortable/SortableTable';
import useIsMobile from '../../../../hooks/useIsMobile';
import { desktopSortable } from '../orderTableLayout';
import OrderRowSortable from './OrderRowSortable';

const rows = [
   {
      _id: '432G01',
      user: 'Jelle',
      products: [
         {
            productId: '33q1q3qs89t',
            productName: 'Appel',
            amount: 3,
         },
         {
            productId: 'qqs46q4svgndgqsbs',
            productName: 'Sla',
            amount: 1,
         },
      ],
      status: 'Pending',
      dateUpdated: '07-06-2022',
   },
   {
      _id: '432F01',
      user: 'Jelle',
      products: [
         {
            productId: '33q1q3qs89t',
            amount: 3,
         },
         {
            productId: 'qqs46q4svgndgqsbs',
            amount: 1,
         },
      ],
      status: 'Delivered',
      dateUpdated: '16-06-2022',
   },
];

const SortableOrderTable = ({ rowButton }) => {
   const isMobile = useIsMobile();

   const getColumnLayout = () => {
      return desktopSortable;
   };

   return (
      <div className="sortableOrderTable">
         <SortableTable
            rows={rows}
            initialOrder="user"
            getColumnLayout={getColumnLayout}
            Row={OrderRowSortable}
            rowButton={rowButton}
         />
      </div>
   );
};

export default SortableOrderTable;
