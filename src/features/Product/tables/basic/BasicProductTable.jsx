import React, { useState } from 'react';
import useIsMobile from '../../../../hooks/useIsMobile';
import TableTitleLink from '../../../../components/table/TableTitleLink';
import './basic-product-table.scss';
import { desktopBasic, mobileBasic } from '../productTableLayout';
import BasicProductRow from './BasicProductRow';
import OrderProductModal from '../../modals/OrderProductModal';
import BasicTable from '../../../../components/table/basic/BasicTable';

const data = [
   {
      _id: 'qvq54vqz1ev3saze',
      title: 'Appels',
      description: '/',
      category: 'Fruit',
      amount: '5',
      unit: '',
      owner: 'Herman',
      Status: 'Active',
   },
   {
      _id: 'qvq54vqz1ev3sazsdfe',
      title: 'Sla',
      description: '/',
      category: 'Groente',
      amount: '1',
      unit: '',
      owner: 'Herman',
      Status: 'Active',
   },
];

const BasicProductTable = () => {
   const isMobile = useIsMobile();
   const [openInfoModal, setOpenInfoModal] = useState(false);
   const [productIdModal, setProductIdModal] = useState(undefined);

   const handleOnModalClose = () => {
      setOpenInfoModal(false);
   };

   const handleModalOpen = (id) => {
      setProductIdModal(id);
      setOpenInfoModal(true);
   };

   const getColumnLayout = () => {
      return isMobile ? mobileBasic : desktopBasic;
   };

   return (
      <div className="productTableContainer">
         <TableTitleLink
            title="Producten"
            to="/products"
            className="tableTitle"
         />
         <BasicTable
            rows={data}
            getColumnLayout={getColumnLayout}
            Row={BasicProductRow}
            handleModalOpen={handleModalOpen}
         />
         <OrderProductModal
            open={openInfoModal}
            handleOnClose={handleOnModalClose}
            productId={productIdModal}
         />
      </div>
   );
};

export default BasicProductTable;
