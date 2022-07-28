import { Add } from '@mui/icons-material';
import React from 'react';
import { Button } from '../../elements/Button';
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
               <Button startIcon={Add}>Nieuw</Button>
               <Button onClick={() => handleOnConfirm(true)}>Ja</Button>
               <Button onClick={() => handleOnConfirm(false)}>Nee</Button>
            </div>
         </div>
      </BasicModal>
   );
};

export default ConfirmModal;
