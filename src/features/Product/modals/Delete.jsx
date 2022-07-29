import React from 'react';
import ConfirmModal from '../../../components/modal/confirm/ConfirmModal';
import './delete.scss';

const ProductDeleteModal = ({ open, handleOnClose, handleOnDelete }) => {
   return (
      <ConfirmModal
         title="Verwijder product"
         description="Ben je zeker dat je het product met de naam 'Appel' wilt verwijderen?"
         open={open}
         handleOnClose={handleOnClose}
         handleOnConfirm={handleOnDelete}
      />
   );
};

export default ProductDeleteModal;
