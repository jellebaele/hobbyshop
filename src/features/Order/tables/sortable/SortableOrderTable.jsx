import React from 'react';
import SortableTable from '../../../../components/table/sortable/SortableTable';
import useIsMobile from '../../../../hooks/useIsMobile';
import useIsTablet from '../../../../hooks/useIsTablet';
import {
   desktopSortable,
   mobileSortable,
   tabletSortable,
} from '../orderTableLayout';
import SortableOrderRow from './SortableOrderRow';

const rows = [
   {
      _id: '432G01',
      orderer: 'Jelle',
      deliverer: 'Herman',
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
      orderer: 'Jelle',
      deliverer: 'Herman',
      products: [
         {
            productId: '33q1q3qs89t',
            productName: 'Biefstuk',
            amount: 3,
         },
         {
            productId: 'qqs46q4svgndgqsbs',
            productName: 'Wortel',
            amount: 1,
         },
      ],
      status: 'Delivered',
      dateUpdated: '16-06-2022',
   },
];

const SortableOrderTable = ({ rowButton, handleRowClick }) => {
   const isMobile = useIsMobile();
   const isTablet = useIsTablet();

   const getColumnLayout = () => {
      if (isMobile) return mobileSortable;
      if (isTablet) return tabletSortable;
      return desktopSortable;
   };

   return (
      <div className="sortableOrderTable">
         <SortableTable
            rows={rows}
            initialOrder="user"
            getColumnLayout={getColumnLayout}
            Row={SortableOrderRow}
            onRowClick={handleRowClick}
            RowButton={rowButton}
         />
      </div>
   );
};

export default SortableOrderTable;
