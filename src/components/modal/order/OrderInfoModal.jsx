import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ORDER_STATUS } from '../../../constants/order';
import { Button } from '../../elements/Button';
import ProductSubTable from '../../table/product-table/sub/ProductSubTable';
import BasicModal from '../basic/BasicModal';
import './order-info-modal.scss';

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

const OrderInfoModal = ({ open, onModalClose, orderId }) => {
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
      <BasicModal open={open} onModalClose={onModalClose} title="Order details">
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
                     <ProductSubTable products={order.products} />
                  </div>
               </span>

               <span>Status:</span>
               <span className="orderDetail">
                  <div className={`status ${orderStatus}`}>{orderStatus}</div>
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

export default OrderInfoModal;
