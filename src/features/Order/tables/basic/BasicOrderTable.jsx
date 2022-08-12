import React, { useState } from 'react';
import './basic-order-table.scss';
import useIsMobile from '../../../../hooks/useIsMobile';
import { desktopBasic, mobileBasic, tableBasic } from '../orderTableLayout';
import useIsTablet from '../../../../hooks/useIsTablet';
import TableTitleLink from '../../../../components/table/TableTitleLink';
import BasicOrderRow from './BasicOrderRow';
import InfoOrderModal from '../../modals/InfoOrderModel';
import BasicTable from '../../../../components/table/basic/BasicTable';

const data = [
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

const BasicOrderTable = () => {
   const isMobile = useIsMobile();
   const isTablet = useIsTablet();
   const [openInfoModal, setOpenInfoModal] = useState(false);
   const [orderIdModal, setProductIdModal] = useState(undefined);

   const handleModalClose = () => {
      setOpenInfoModal(false);
   };

   const handleModalOpen = (id) => {
      setProductIdModal(id);
      setOpenInfoModal(true);
   };

   const getColumnLayout = () => {
      if (isTablet && isMobile) {
         return mobileBasic;
      } else if (isTablet && !isMobile) {
         return tableBasic;
      } else {
         return desktopBasic;
      }
   };

   return (
      <div className="orderTableContainer">
         <TableTitleLink title="Orders" to="/orders" className="tableTitle" />
         <BasicTable
            rows={data}
            getColumnLayout={getColumnLayout}
            Row={BasicOrderRow}
            handleModalOpen={handleModalOpen}
         />
         <InfoOrderModal
            open={openInfoModal}
            handleOnClose={handleModalClose}
            orderId={orderIdModal}
         />
      </div>
   );
};

export default BasicOrderTable;
