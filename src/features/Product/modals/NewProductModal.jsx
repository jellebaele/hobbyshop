import { Add } from '@mui/icons-material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../components/button/Button';
import BasicModal from '../../../components/modal/basic/BasicModal';
import { productFormOptions } from '../validation';
import './new-product-modal.scss';
import ProductBodyModal from './ProductBodyModal';

const users = ['Herman', 'Jana', 'Jelle'];

const NewProductModal = ({ open, handleOnClose }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
      getValues,
   } = useForm(productFormOptions);

   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Maak nieuw product"
      >
         <div className="productNewModalContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="top">
                  <ProductBodyModal
                     register={register}
                     errors={errors}
                     setValue={setValue}
                     getValues={getValues}
                     users={users}
                  />
               </div>

               <div className="bottom">
                  <div className="buttonContainer">
                     <Button startIcon={Add} type="submit">
                        Voeg toe
                     </Button>
                  </div>
               </div>
            </form>
         </div>
      </BasicModal>
   );
};

export default NewProductModal;
