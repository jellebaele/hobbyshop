import { TextareaAutosize } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from '../../../components/dropdown/Dropdown';
import BasicModal from '../../../components/modal/basic/BasicModal';
import { PRODUCT_STATUS } from '../constants';
import { productFormOptions } from '../validation';
import './new-product-modal.scss';

const users = ['Herman', 'Jana', 'Jelle'];

const NewProductModal = ({ open, handleOnClose }) => {
   const {
      register,
      handleSubmit,
      reset,
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
         <div className="productEditModalContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="top">
                  <div className="inputGrid">
                     <label>Naam:</label>
                     <div className="inputGroup">
                        <input
                           name="name"
                           type="text"
                           disabled={false}
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
                           disabled={false}
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
                           disabled={false}
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
                              disabled={false}
                              {...register('amount')}
                           />
                           <input
                              name="amount"
                              type="text"
                              className="amountInput"
                              disabled={false}
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
                           options={PRODUCT_STATUS.values}
                           onSelect={(newValue) => setValue('status', newValue)}
                           register={register}
                           name="status"
                           className={`customDropdown ${getValues('status')}`}
                           disabled={false}
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
                           disabled={false}
                        />
                        <div className="formInputError">
                           {errors.owner?.message}
                        </div>
                     </div>
                  </div>
               </div>

               {/* <div className="bottom">
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
                     </div>*/}
            </form>
         </div>
      </BasicModal>
   );
};

export default NewProductModal;
