import React, { useState } from 'react';
import { Button } from '../../../components/button/Button';
import BasicModal from '../../../components/modal/basic/BasicModal';
import './info-order-modal.scss';
import OrderForm from '../form/OrderForm';

const order = {
   _id: '432G01',
   user: 'Jelle',
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
   status: 'Requested',
   dateUpdated: '07-06-2022',
};

const InfoOrderModal = ({ open, handleOnClose, orderId }) => {
   const [edit, setEdit] = useState(false);

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Order details"
      >
         <div className="infoOrderModalContainer">
            <OrderForm
               order={order}
               editStatus={edit}
               onSubmit={onSubmit}
               onCancelEdit={() => setEdit(false)}
               confirmText="Wijzig status"
            />

            {!edit && (
               <div className="buttonContainer">
                  <Button onClick={() => setEdit(true)}>Wijzig status</Button>
               </div>
            )}
         </div>
      </BasicModal>
   );
};

export default InfoOrderModal;
