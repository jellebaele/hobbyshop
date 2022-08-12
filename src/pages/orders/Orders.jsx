import React, { useState } from 'react';
import Header from '../../components/header/Header';
import './orders.scss';
import CollapsibleContainer from '../../components/collapsibleContainer/CollapsibleContainer';
import SortableOrderTable from '../../features/Order/tables/sortable/SortableOrderTable';
import { IconButton } from '../../components/button/IconButton';
import { Edit } from '@mui/icons-material';
import EditOrderModal from '../../features/Order/modals/EditOrderModal';

const Orders = () => {
   const [openModal, setOpenModal] = useState(false);

   const handleEditModalOpen = () => {
      setOpenModal(true);
   };

   return (
      <div className="ordersContainer">
         <Header pageTitle="Orders" />
         <div className="bodyContainer">
            <CollapsibleContainer title="Mijn orders">
               <SortableOrderTable
                  rowButton={
                     <IconButton
                        onClick={handleEditModalOpen}
                        className="rowButton"
                     >
                        <Edit />
                     </IconButton>
                  }
               />
            </CollapsibleContainer>

            <CollapsibleContainer title="Alle orders">
               <SortableOrderTable
                  rowButton={
                     <IconButton
                        onClick={handleEditModalOpen}
                        className="rowButton"
                     >
                        <Edit />
                     </IconButton>
                  }
               />
            </CollapsibleContainer>
         </div>
         <EditOrderModal
            open={openModal}
            handleOnClose={() => setOpenModal(false)}
         />
      </div>
   );
};

export default Orders;
