import React from 'react';
import { Button } from '../../../components/button/Button';
import BasicModal from '../../../components/modal/basic/BasicModal';
import './delete.scss';

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
