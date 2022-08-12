import React from 'react';
import Header from '../../components/header/Header';
import './orders.scss';
import CollapsibleContainer from '../../components/collapsibleContainer/CollapsibleContainer';
import SortableOrderTable from '../../features/Order/tables/sortable/SortableOrderTable';
import { IconButton } from '../../components/button/IconButton';
import { Edit } from '@mui/icons-material';

const Orders = () => {
   const handleEditModalOpen = () => {
      console.log('Open');
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
               <SortableOrderTable />
            </CollapsibleContainer>
         </div>
      </div>
   );
};

export default Orders;
