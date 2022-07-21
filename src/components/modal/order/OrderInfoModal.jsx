import {
   FormControl,
   FormHelperText,
   InputLabel,
   MenuItem,
   Select,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ORDER_STATUS } from '../../../constants/order';
import ProductSubTable from '../../table/product-table/ProductSubTable';
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

   const getNextStatus = () => {
      const statusIndex = ORDER_STATUS.indexOf(orderStatus);
      return statusIndex < ORDER_STATUS.length
         ? ORDER_STATUS[statusIndex + 1]
         : ORDER_STATUS[statusIndex];
   };

   const setNextStatus = () => {
      setOrderStatus(getNextStatus());
   };

   const handleStatusChange = (e) => {
      setSelectedStatus(e.target.value);
   };

   const [age, setAge] = React.useState('');

   const handleChange = (event) => {
      setAge(event.target.value);
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
                  <button onClick={() => setOrderStatus(selectedStatus)}>
                     Wijzig
                  </button>
               </div>

               {/* 
               <FormControl
                  size="small"
                  sx={{ m: 1, minWidth: 120 }}
                  className="formControl"
               >
                  <Select
                     value={selectedStatus}
                     onChange={handleStatusChange}
                     displayEmpty
                     inputProps={{ 'aria-label': 'Without label' }}
                  >
                     {ORDER_STATUS.map((s) => (
                        <MenuItem key={s} value={s}>
                           {s}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
                */}
            </div>
         </div>
      </BasicModal>
   );
};

export default OrderInfoModal;
