import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import React, { useState } from 'react';
import useIsMobile from '../../../../hooks/useIsMobile';
import ProductInfoModal from '../../../modal/product/ProductInfoModal';
import TableHeader from '../../common/TableHeader';
import TableTitle from '../../common/TableTitle';
import './stylesheets/product-table.scss';
import ProductRow from './ProductRow';
import {
   productColumnLayoutDesktop,
   productColumnLayoutMobile,
} from '../utils/productTableLayout';

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

const ProductTableBasic = () => {
   const isMobile = useIsMobile();
   const [openInfoModal, setOpenInfoModal] = useState(false);
   const [productIdModal, setProductIdModal] = useState(undefined);

   const handleModalClose = () => {
      setOpenInfoModal(false);
   };

   const handleModalOpen = (id) => {
      setProductIdModal(id);
      setOpenInfoModal(true);
   };

   const getColumnLayout = () => {
      return isMobile ? productColumnLayoutMobile : productColumnLayoutDesktop;
   };

   return (
      <div className="productTableContainer">
         <TableTitle title="Producten" to="/products" className="tableTitle" />
         <div className="tableContainerWrapper">
            <TableContainer component={Paper}>
               <Table size={isMobile ? 'small' : 'medium'}>
                  <TableHeader columns={getColumnLayout()} />
                  <TableBody>
                     {data.map((row) => (
                        <ProductRow
                           row={row}
                           handleModalOpen={handleModalOpen}
                           key={row._id}
                        />
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
         <ProductInfoModal
            open={openInfoModal}
            onModalClose={handleModalClose}
            productId={productIdModal}
         />
      </div>
   );
};

export default ProductTableBasic;
