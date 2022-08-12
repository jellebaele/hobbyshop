import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from '../../../components/dropdown/Dropdown';
import ConfirmForm from '../../../components/form/ConfirmForm';
import FormInput from '../../../components/form/FormInput';
import Textarea from '../../../components/textarea/Textarea';
import { PRODUCT_STATUS } from '../constants';
import { productFormOptions } from '../validation';
import './edit-product-form-container.scss';

const EditProductForm = ({ product, edit, users, onSubmit, onCancelEdit }) => {
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
   }, [reset, product]);

   const handleCancelEdit = () => {
      reset();
      onCancelEdit();
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className="editProductFormContainer"
      >
         <div className="inputGrid">
            <label>Naam:</label>
            <FormInput
               name="title"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.title}
            />

            {/* <FormInput
            label="Naam"
            name="title"
            type="text"
            disabled={!edit}
            register={register}
            error={errors.title}
         /> */}

            {/* <label>Naam:</label> */}

            {/* <label>Naam:</label>
         <div className="inputGroup">
            <input
               name="name"
               type="text"
               disabled={!edit}
               {...register('title')}
            />
            <div className="formInputError">{errors.title?.message}</div>
         </div> */}

            <label>Categorie:</label>
            <FormInput
               name="category"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.category}
            />

            {/* <div className="inputGroup">
            <input
               name="category"
               type="text"
               className="productInput"
               disabled={!edit}
               {...register('category')}
            />
            <div className="formInputError">{errors.category?.message}</div>
         </div>

         <label>Beschrijving:</label>
         <div className="inputGroup">
            <Textarea
               name="description"
               onChange={(newValue) => setValue('description', newValue)}
               register={register}
               disabled={!edit}
               className="textarea"
               initialValue={getValues('description')}
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
               disabled={!edit}
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
               disabled={!edit}
               className={`customDropdown ${!edit && 'disabled'}`}
            />
            <div className="formInputError">{errors.owner?.message}</div>
         </div> */}
         </div>

         {edit && (
            <ConfirmForm confirmText="Update" onCancel={handleCancelEdit} />
         )}
      </form>
   );
};

export default EditProductForm;
