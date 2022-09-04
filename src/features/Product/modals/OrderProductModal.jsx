import React from 'react';
import BasicModal from '../../../components/modal/basic/BasicModal';
import { Add, Remove, ShoppingBag } from '@mui/icons-material';
import { useState } from 'react';
import { IconButton } from '../../../components/button/IconButton';
import { Button } from '../../../components/button/Button';
import ProductForm from '../form/ProductForm';
import { useSnackbar } from 'notistack';
import './order-product-modal.scss';

const productData = {
   _id: 'qvq54vqz1ev3saze',
   title: 'Appels',
   description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum non, consequatur, officiis sed molestiae explicabo qui rem dolor nemo cumque molestias earum amet, recusandae ipsam in odit aliquam voluptatem nobis.',
   category: 'Fruit',
   amount: '5',
   unit: 'stuks',
   owner: 'Herman',
   status: 'Inactive',
   UpdatedAt: '20-07-2022',
};

const OrderProductModal = ({ open, handleOnClose, productId }) => {
   const [amount, setAmount] = useState(0);
   const { enqueueSnackbar } = useSnackbar();

   const handleIncreaseAmount = () => {
      if (amount < productData.amount) setAmount(parseInt(amount) + 1);
   };

   const handleDecreaseAmount = () => {
      if (amount > 0) setAmount(parseInt(amount) + 1);
   };

   const onSubmit = (data) => {
      console.log(productData);
      enqueueSnackbar('Success!', { variant: 'success' });
   };

   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Product details"
      >
         <div className="productInfoModalContainer">
            <ProductForm
               product={productData}
               edit={false}
               onSubmit={onSubmit}
            />

            <div className="orderContainer">
               <div className="amountContainer">
                  <IconButton
                     onClick={handleDecreaseAmount}
                     className="modalButton"
                  >
                     <Remove />
                  </IconButton>

                  <div className="amount">{amount}</div>
                  <IconButton
                     onClick={handleIncreaseAmount}
                     className="modalButton"
                  >
                     <Add />
                  </IconButton>
               </div>

               <Button
                  startIcon={ShoppingBag}
                  className="orderButton"
                  classNameIcon="orderIcon"
                  onClick={() => onSubmit()}
               >
                  In winkelwagen
               </Button>
            </div>
         </div>
      </BasicModal>
   );
};

export default OrderProductModal;
