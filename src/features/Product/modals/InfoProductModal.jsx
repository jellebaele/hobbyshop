import React, { useEffect } from 'react';
import BasicModal from '../../../components/modal/basic/BasicModal';
import './info-product-modal.scss';
import { Add, Remove, ShoppingBag } from '@mui/icons-material';
import { useState } from 'react';
import { IconButton } from '../../../components/button/IconButton';
import { Button } from '../../../components/button/Button';
import { useForm } from 'react-hook-form';
import { productFormOptions } from '../validation';
import ProductBodyModal from './ProductBodyModal';

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

const InfoProductModal = ({ open, handleOnClose, productId }) => {
   const [product, setProduct] = useState(productData);
   //  !! let?
   let [amount, setAmount] = useState(0);
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      setValue,
      getValues,
   } = useForm(productFormOptions);

   useEffect(() => {
      reset(product);
      setProduct(productData);
   }, [product, reset]);

   const handleIncreaseAmount = () => {
      if (amount < productData.amount) setAmount(++amount);
   };

   const handleDecreaseAmount = () => {
      if (amount > 0) setAmount(--amount);
   };

   const onSubmit = (data) => {
      console.log(data);
   };
   /**
    * _id
    * Name
    * Description
    * Category
    * Amount
    * Unit (mm, kg, ...)
    * Owner
    * Status
    * TimeCreated
    * TimeUpdated
    */

   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Product details"
      >
         <div className="productInfoModalContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="top">
                  <ProductBodyModal
                     register={register}
                     errors={errors}
                     setValue={setValue}
                     getValues={getValues}
                     disabled={true}
                  />
               </div>

               <div className="bottom">
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
                        type="submit"
                     >
                        In winkelwagen
                     </Button>
                  </div>
               </div>
            </form>
         </div>
      </BasicModal>
   );
};

export default InfoProductModal;
