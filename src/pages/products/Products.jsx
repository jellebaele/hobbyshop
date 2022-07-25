import React, { useState } from 'react';
import Header from '../../components/header/Header';
import ConfirmModal from '../../components/modal/confirm/ConfirmModal';
import ProductTableExtended from '../../components/table/product-table/extended/ProductTableExtended';
import './products.scss';

const Products = () => {
   const [openInfoModal, setOpenInfoModal] = useState(false);
   const [productId, setProductId] = useState(undefined);

   const handleConfirmModalClose = () => {
      setOpenInfoModal(false);
   };

   const handleConfirmModalOpen = (id) => {
      setProductId(id);
      setOpenInfoModal(true);
   };

   const handleOnConfirm = (deleteProduct) => {
      if (deleteProduct) console.log('delete product' + productId);
      if (!deleteProduct) console.log('do not delete');
      setOpenInfoModal(false);
   };

   return (
      <div className="productsContainer">
         <Header pageTitle="Producten" />
         <div className="bodyContainer">
            <div className="tableContainer">
               <ProductTableExtended handleOnDelete={handleConfirmModalOpen} />
               <ConfirmModal
                  open={openInfoModal}
                  onModalClose={handleConfirmModalClose}
                  handleOnConfirm={handleOnConfirm}
               />
            </div>
         </div>
      </div>
   );
};

export default Products;
