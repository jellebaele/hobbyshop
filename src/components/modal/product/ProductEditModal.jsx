import { Check, Clear, Delete, Edit } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import BasicModal from '../basic/BasicModal';
import './product-edit-modal.scss';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { TextareaAutosize } from '@mui/material';
import Dropdown from '../../elements/Dropdown';

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

const options = ['Active', 'Inactive'];
const users = ['Herman', 'Jana', 'Jelle'];

const validationSchema = Yup.object().shape({
   title: Yup.string().required('Titel is verplicht.'),
   category: Yup.string().required('Categorie is verplict.'),
   description: Yup.string().max(
      250,
      'De beschrijving mag maximaal 250 karakters lang zijn.'
   ),
   status: Yup.string().required('Status is verplicht.'),
});

const productFormOptions = { resolver: yupResolver(validationSchema) };

const ProductEditModal = ({ open, onModalClose }) => {
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
         onModalClose={onModalClose}
         title="Product details"
      >
         <div className="productEditModalContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="top">
                  <div className="inputGrid">
                     <label>Naam:</label>
                     <div className="inputGroup">
                        <input
                           name="name"
                           type="text"
                           disabled={!edit}
                           {...register('title')}
                        />
                        <div className="formInputError">
                           {errors.title?.message}
                        </div>
                     </div>

                     <label>Categorie:</label>
                     <div className="inputGroup">
                        <input
                           name="category"
                           type="text"
                           className="productInput"
                           disabled={!edit}
                           {...register('category')}
                        />
                        <div className="formInputError">
                           {errors.category?.message}
                        </div>
                     </div>

                     <label>Beschrijving:</label>
                     <div className="inputGroup">
                        <TextareaAutosize
                           className="textAreaAutosize"
                           disabled={!edit}
                           {...register('description')}
                           maxRows={10}
                        />
                        <div className="formInputError">
                           {errors.description?.message}
                        </div>
                     </div>

                     <label>Stock:</label>
                     <div className="inputGroup">
                        <div className="stockGroup">
                           <input
                              name="amount"
                              type="number"
                              className="amountInput"
                              disabled={!edit}
                              {...register('amount')}
                           />
                           <input
                              name="amount"
                              type="text"
                              className="amountInput"
                              disabled={!edit}
                              {...register('unit')}
                           />
                        </div>
                        <div className="formInputError">
                           {errors.amount?.message}
                        </div>
                     </div>

                     <label>Status:</label>
                     <div className="inputGroup">
                        <Dropdown
                           options={options}
                           onSelect={(newValue) => setValue('status', newValue)}
                           register={register}
                           name="status"
                           className={`customDropdown ${getValues('status')}`}
                           disabled={!edit}
                        />
                        <div className="formInputError">
                           {errors.status?.message}
                        </div>
                     </div>

                     <label>Eigenaar:</label>
                     <div className="inputGroup">
                        <Dropdown
                           options={users}
                           onSelect={(newValue) => setValue('owner', newValue)}
                           register={register}
                           name="owner"
                           disabled={!edit}
                        />
                        <div className="formInputError">
                           {errors.owner?.message}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bottom">
                  <div className="buttonContainer">
                     {!edit && (
                        <div className="buttonContainer">
                           <button type="button" onClick={handleDelete}>
                              <Delete className="icon" />
                              Delete
                           </button>
                           <button type="button" onClick={handleEdit}>
                              <Edit className="icon" /> Bewerk
                           </button>
                        </div>
                     )}

                     {edit && (
                        <div className="buttonContainer">
                           <button type="button" onClick={handleCancelEdit}>
                              <Clear className="icon" /> Annuleer
                           </button>

                           <button type="submit">
                              <Check className="icon" /> Update
                           </button>
                        </div>
                     )}
                  </div>
               </div>
            </form>
         </div>
      </BasicModal>
   );
};

export default ProductEditModal;
