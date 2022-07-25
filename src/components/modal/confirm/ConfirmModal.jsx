import React from 'react';
import BasicModal from '../basic/BasicModal';
import './confirm-modal.scss';

const ConfirmModal = ({ open, onModalClose, handleOnConfirm }) => {
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
               <button onClick={() => handleOnConfirm(true)}>Ja</button>
               <button onClick={() => handleOnConfirm(false)}>Nee</button>
            </div>
         </div>
      </BasicModal>
   );
};

export default ConfirmModal;
