import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmForm from '../../../components/form/ConfirmForm';
import FormDropdown from '../../../components/form/FormDropdown';
import FormInput from '../../../components/form/FormInput';
import FormTextarea from '../../../components/form/FormTextarea';
import { PRODUCT_STATUS } from '../constants';
import { productFormOptions } from '../validation';
import './edit-product-form-container.scss';

const ProductForm = ({
   product,
   edit,
   users,
   onSubmit,
   onCancelEdit,
   confirmText,
}) => {
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

            <label>Categorie:</label>
            <FormInput
               name="category"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.category}
            />

            <label className="descriptionLabel">Beschrijving:</label>
            <FormTextarea
               name="description"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.description}
               setValue={setValue}
               getValues={getValues}
            />

            <label>Stock:</label>
            <div className="stockGroup">
               <FormInput
                  name="amount"
                  type="number"
                  disabled={!edit}
                  register={register}
                  error={errors.amount}
                  className="stockInput"
               />
               <FormInput
                  name="unit"
                  type="text"
                  disabled={!edit}
                  register={register}
               />
            </div>

            <label>Status:</label>
            <FormDropdown
               options={PRODUCT_STATUS.values}
               name="status"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.status}
               setValue={setValue}
            />

            <label>Eigenaar:</label>
            <FormDropdown
               options={users}
               name="owner"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.owner}
               setValue={setValue}
            />
         </div>

         {edit && (
            <ConfirmForm
               confirmText={confirmText}
               onCancel={handleCancelEdit}
            />
         )}
      </form>
   );
};

export default ProductForm;
