import { TextareaAutosize } from '@mui/material';
import React from 'react';
import Dropdown from '../../../components/dropdown/Dropdown';
import { PRODUCT_STATUS } from '../constants';
import './product-body-modal.scss';

const ProductBodyModal = ({
   register,
   errors,
   setValue,
   getValues,
   users,
   disabled = false,
}) => {
   return (
      <div className="productBodyModalContainer">
         <label>Naam:</label>
         <div className="inputGroup">
            <input
               name="name"
               type="text"
               disabled={disabled}
               {...register('title')}
            />
            <div className="formInputError">{errors.title?.message}</div>
         </div>

         <label>Categorie:</label>
         <div className="inputGroup">
            <input
               name="category"
               type="text"
               className="productInput"
               disabled={disabled}
               {...register('category')}
            />
            <div className="formInputError">{errors.category?.message}</div>
         </div>

         <label>Beschrijving:</label>
         <div className="inputGroup">
            <TextareaAutosize
               className="textAreaAutosize"
               disabled={disabled}
               {...register('description')}
               maxRows={10}
            />
            <div className="formInputError">{errors.description?.message}</div>
         </div>

         <label>Stock:</label>
         <div className="inputGroup">
            <div className="stockGroup">
               <input
                  name="amount"
                  type="number"
                  className="amountInput"
                  disabled={disabled}
                  {...register('amount')}
               />
               <input
                  name="amount"
                  type="text"
                  className="amountInput"
                  disabled={disabled}
                  {...register('unit')}
               />
            </div>
            <div className="formInputError">{errors.amount?.message}</div>
         </div>

         <label>Status:</label>
         <div className="inputGroup">
            <Dropdown
               options={PRODUCT_STATUS.values}
               onSelect={(newValue) => setValue('status', newValue)}
               register={register}
               name="status"
               className={`customDropdown ${getValues('status')}`}
               disabled={disabled}
            />
            <div className="formInputError">{errors.status?.message}</div>
         </div>

         <label>Eigenaar:</label>
         <div className="inputGroup">
            <Dropdown
               options={users}
               onSelect={(newValue) => setValue('owner', newValue)}
               register={register}
               name="owner"
               disabled={disabled}
            />
            <div className="formInputError">{errors.owner?.message}</div>
         </div>
      </div>
   );
};

export default ProductBodyModal;
