import React, { useState } from 'react';
import Header from '../../components/header/Header';
import ProductDeleteModal from '../../components/modal/product/ProductDeleteModal';
import ProductEditModal from '../../components/modal/product/ProductEditModal';
import ProductTableExtended from '../../components/table/product-table/extended/ProductTableExtended';
import './products.scss';

const Products = () => {
   const [openDeleteModal, setOpenDeleteModal] = useState(false);
   const [openEditModal, setOpenEditModal] = useState(false);
   const [productId, setProductId] = useState(undefined);

   const handleDeleteModalClose = () => {
      setOpenDeleteModal(false);
   };

   const handleEditModalClose = () => {
      setOpenEditModal(false);
   };

   const handleDeleteModalOpen = (id) => {
      setProductId(id);
      setOpenDeleteModal(true);
   };
   const handleEditModalOpen = (id) => {
      setProductId(id);
      setOpenEditModal(true);
   };

   const handleOnDelete = (deleteProduct) => {
      if (deleteProduct) console.log('delete product' + productId);
      if (!deleteProduct) console.log('do not delete');
      setOpenDeleteModal(false);
   };

   return (
      <div className="productsContainer">
         <Header pageTitle="Producten" />
         <div className="bodyContainer">
            <div className="tableContainer">
               <ProductTableExtended
                  handleOnDelete={handleDeleteModalOpen}
                  handleOnEdit={handleEditModalOpen}
               />
               <ProductDeleteModal
                  open={openDeleteModal}
                  onModalClose={handleDeleteModalClose}
                  handleOnDelete={handleOnDelete}
               />
               <ProductEditModal
                  open={openEditModal}
                  onModalClose={handleEditModalClose}
               />
            </div>
         </div>
      </div>
   );
};

export default Products;
