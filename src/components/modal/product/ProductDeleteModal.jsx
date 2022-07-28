import React from 'react';
import { Button } from '../../elements/Button';
import BasicModal from '../basic/BasicModal';
import './product-delete-modal.scss';

const ProductDeleteModal = ({ open, onModalClose, handleOnDelete }) => {
   return (
      <BasicModal
         open={open}
         onModalClose={onModalClose}
         title="Verwijder product"
         width="auto"
      >
         <div className="confirmModalContainer">
            <div className="confirmText">
               {`Ben je zeker dat je product met naam 'Appel' wilt verwijderen?`}
            </div>
            <div className="confirmModalButtonContainer">
               <Button onClick={() => handleOnDelete(true)}>Ja</Button>
               <Button onClick={() => handleOnDelete(false)}>Nee</Button>
            </div>
         </div>
      </BasicModal>
   );
};

export default ProductDeleteModal;
