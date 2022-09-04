import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './basic-modal.scss';

const BasicModal = ({
   open,
   handleOnClose,
   title,
   children,
   width = '70%',
}) => {
   return (
      <div className="modalContainer">
         <Modal
            open={open}
            onClose={() => handleOnClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box className="boxModal" style={{ width: width }}>
               <div className="titleContainerModal">
                  <h2>{title}</h2>
                  <button onClick={() => handleOnClose()}>
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
