import React from 'react';
import BasicModal from '../../../components/modal/basic/BasicModal';
import ProductForm from '../form/ProductForm';
import './new-product-modal.scss';

const users = ['Herman', 'Jana', 'Jelle'];

const NewProductModal = ({ open, handleOnClose }) => {
   const handleCancelEdit = () => {
      handleOnClose();
   };

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Maak nieuw product"
      >
         <div className="productNewModalContainer">
            <ProductForm
               edit={true}
               users={users}
               onSubmit={onSubmit}
               onCancelEdit={handleCancelEdit}
               confirmText="Voeg toe"
            />
         </div>
      </BasicModal>
   );
};

export default NewProductModal;
