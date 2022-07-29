import { Check, Clear, Delete, Edit } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import BasicModal from '../../../components/modal/basic/BasicModal';
import './edit-product-modal.scss';
import { useEffect } from 'react';
import { Button } from '../../../components/button/Button';
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

const users = ['Herman', 'Jana', 'Jelle'];

const EditProductModal = ({ open, handleOnClose }) => {
   const [edit, setEdit] = useState(false);
   const [product, setProduct] = useState(productData);
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

   const handleDelete = () => {};
   const handleEdit = () => {
      setEdit(true);
   };
   const handleCancelEdit = () => {
      setEdit(false);
      reset();
   };

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <BasicModal
         open={open}
         handleOnClose={handleOnClose}
         title="Product details"
      >
         <div className="productEditModalContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="top">
                  <ProductBodyModal
                     register={register}
                     errors={errors}
                     setValue={setValue}
                     getValues={getValues}
                     users={users}
                     disabled={!edit}
                  />
               </div>

               <div className="bottom">
                  <div className="buttonContainer">
                     {!edit && (
                        <div className="buttonContainer">
                           <Button onClick={handleDelete} startIcon={Delete}>
                              Delete
                           </Button>
                           <Button onClick={handleEdit} startIcon={Edit}>
                              Bewerk
                           </Button>
                        </div>
                     )}

                     {edit && (
                        <div className="buttonContainer">
                           <Button onClick={handleCancelEdit} startIcon={Clear}>
                              Annuleer
                           </Button>
                           <Button type="submit" startIcon={Check}>
                              Update
                           </Button>
                        </div>
                     )}
                  </div>
               </div>
            </form>
         </div>
      </BasicModal>
   );
};

export default EditProductModal;
