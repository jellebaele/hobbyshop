import { Delete, Edit } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import BasicModal from '../../../components/modal/basic/BasicModal';
import './edit-product-modal.scss';
import { useEffect } from 'react';
import { Button } from '../../../components/button/Button';
import { productFormOptions } from '../validation';
import ProductBodyModal from './ProductBodyModal';
import ConfirmForm from '../../../components/form/ConfirmForm';
import EditProductForm from '../form/EditProductForm';

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

   const handleCancelEdit = () => {
      setEdit(false);
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
            <EditProductForm
               product={productData}
               edit={edit}
               users={users}
               onSubmit={onSubmit}
               onCancelEdit={handleCancelEdit}
            />

            {!edit && (
               <div className="buttonContainer">
                  <Button
                     startIcon={Delete}
                     className="button"
                     onClick={handleDelete}
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

export default EditProductModal;
