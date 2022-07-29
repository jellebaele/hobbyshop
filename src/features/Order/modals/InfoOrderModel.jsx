import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ORDER_STATUS } from '../constants';
import SubProductTable from '../../Product/tables/small/SubProductTable';
import { Button } from '../../../components/button/Button';
import { Status } from '../../../components/status/Status';
import BasicModal from '../../../components/modal/basic/BasicModal';
import './info-order-modal.scss';

const order = {
   _id: '432G01',
   user: 'Jelle',
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
   const [orderStatus, setOrderStatus] = useState(null);
   const [selectedStatus, setSelectedStatus] = useState(orderStatus);

   useEffect(() => {
      setOrderStatus(order.status);
      setSelectedStatus(order.status);
   }, []);

   const handleStatusChange = (e) => {
      setSelectedStatus(e.target.value);
   };

   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Order details"
      >
         <div className="orderInfoModalContainer">
            <div className="orderDetailsGrid">
               <span>Order Id:</span>
               <span className="orderDetail">{order._id}</span>

               <span>Besteld door:</span>
               <span className="orderDetail">{order.user}</span>

               <span>Datum:</span>
               <span className="orderDetail">{order.dateUpdated}</span>

               <span>Producten:</span>
               <span className="orderDetail">
                  <div className="productOverviewTable">
                     <SubProductTable products={order.products} />
                  </div>
               </span>

               <span>Status:</span>
               <span className="orderDetail">
                  <Status status={orderStatus} />
               </span>
            </div>

            <div className="changeStatusContainer">
               <div className="selectContainer">
                  <span>Wijzig status naar </span>
                  <FormControl size="small">
                     <InputLabel id="demo-select-small">Status</InputLabel>
                     <Select
                        value={selectedStatus}
                        label="Status"
                        onChange={handleStatusChange}
                     >
                        {ORDER_STATUS.map((s) => (
                           <MenuItem key={s} value={s}>
                              {s}
                           </MenuItem>
                        ))}
                     </Select>
                  </FormControl>
               </div>
               <div className="buttonContainer">
                  <Button onClick={() => setOrderStatus(selectedStatus)}>
                     Wijzig
                  </Button>
               </div>
            </div>
         </div>
      </BasicModal>
   );
};

export default InfoOrderModal;
