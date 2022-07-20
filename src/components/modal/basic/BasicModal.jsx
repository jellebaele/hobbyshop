import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './basic-modal.scss';

const BasicModal = ({ open, onModalClose, title, children }) => {
   return (
      <div className="modalContainer">
         <Modal
            open={open}
            onClose={() => onModalClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className="boxModal">
               <div className="titleContainerModal">
                  <h2>{title}</h2>
                  <button onClick={() => onModalClose()}>
                     <CloseIcon className="modalCloseIcon" />
                  </button>
               </div>
               {children}
            </Box>
         </Modal>
      </div>
   );
};

export default BasicModal;
