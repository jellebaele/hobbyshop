import React from 'react';
import { Button } from '../../button/Button';
import BasicModal from '../basic/BasicModal';
import './confirm-modal.scss';

const ConfirmModal = ({
   open,
   handleOnClose,
   handleOnConfirm,
   width = 'auto',
   title,
   description,
}) => {
   return (
      <BasicModal
         open={open}
         onModalClose={handleOnClose}
         title={title}
         width={width}
      >
         <div className="confirmModalContainer">
            <div className="confirmText">{description}</div>
            <div className="confirmModalButtonContainer">
               <Button onClick={() => handleOnConfirm(true)}>Ja</Button>
               <Button onClick={() => handleOnConfirm(false)}>Nee</Button>
            </div>
         </div>
      </BasicModal>
   );
};

export default ConfirmModal;
