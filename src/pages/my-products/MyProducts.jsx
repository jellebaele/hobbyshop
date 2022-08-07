import React, { useState } from 'react';
import Header from '../../components/header/Header';
import DeleteProductModal from '../../features/Product/modals/DeleteProductModal';
import EditProductModal from '../../features/Product/modals/EditProductModal';
import NewProductModal from '../../features/Product/modals/NewProductModal';
import SortableProductTable from '../../features/Product/tables/sortable/SortableProductTable';
import './my-products.scss';

const MyProducts = () => {
   const [openDeleteModal, setOpenDeleteModal] = useState(false);
   const [openEditModal, setOpenEditModal] = useState(false);
   const [openNewModal, setOpenNewModal] = useState(false);
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

   const handleNewModalOpen = () => {
      setOpenNewModal(true);
   };
   const handleNewModalClose = () => {
      setOpenNewModal(false);
   };

   return (
      <div className="myProductsContainer">
         <Header pageTitle="Producten" />
         <div className="bodyContainer">
            <div className="tableContainer">
               <SortableProductTable
                  handleOnDelete={handleDeleteModalOpen}
                  handleOnEdit={handleEditModalOpen}
                  handleOnNew={handleNewModalOpen}
               />
               <DeleteProductModal
                  open={openDeleteModal}
                  handleOnClose={handleDeleteModalClose}
                  handleOnDelete={handleOnDelete}
               />
               <EditProductModal
                  open={openEditModal}
                  handleOnClose={handleEditModalClose}
               />

               <NewProductModal
                  open={openNewModal}
                  handleOnClose={handleNewModalClose}
               />
            </div>
         </div>
      </div>
   );
};

export default MyProducts;
