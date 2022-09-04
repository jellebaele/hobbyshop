import { Delete, Edit } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button } from '../../../components/button/Button';
import BasicModal from '../../../components/modal/basic/BasicModal';
import OrderForm from '../form/OrderForm';
import './edit-order-modal.scss';

const order = {
   _id: '432G01',
   orderer: 'Jelle',
   deliverer: 'Herman',
   products: [
      {
         productId: '33q1q3qs89t',
         productName: 'Appel',
         amount: 3,
      },
      {
         productId: 'qqs46q4svgndgqsbs',
         productName: 'Sla',
         amount: 1,
      },
   ],
   status: 'Pending',
   dateUpdated: '07-06-2022',
};

const users = ['Jelle', 'Jana', 'Herman'];

const EditOrderModal = ({ open, handleOnClose }) => {
   const [edit, setEdit] = useState(false);

   const handleDelete = () => {};

   const onSubmit = (data) => {
      console.log(data);
   };

   const handleCancelEdit = () => {
      setEdit(false);
   };

   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Order details"
      >
         <div className="editOrderModalContainer">
            <OrderForm
               order={order}
               edit={edit}
               users={users}
               onSubmit={onSubmit}
               onCancelEdit={handleCancelEdit}
               confirmText="Update"
            />

            {!edit && (
               <div className="buttonContainer">
                  <Button
                     startIcon={Delete}
                     onClick={handleDelete}
                     className="button"
                  >
                     Verwijder
                  </Button>
                  <Button
                     startIcon={Edit}
                     onClick={() => setEdit(true)}
                     className="button"
                  >
                     Bewerk
                  </Button>
               </div>
            )}
         </div>
      </BasicModal>
   );
};

export default EditOrderModal;
