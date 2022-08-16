import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmForm from '../../../components/form/ConfirmForm';
import FormDropdown from '../../../components/form/FormDropdown';
import FormInput from '../../../components/form/FormInput';
import { orderFormOptions } from './validation';
import './order-form.scss';
import { ORDER_STATUS } from '../constants';
import SubProductTable from '../../Product/tables/small/SubProductTable';

// const order = {
//     _id: '432G01',
//     user: 'Jelle',
//     products: [
//        {
//           productId: '33q1q3qs89t',
//           productName: 'Appel',
//           amount: 3,
//        },
//        {
//           productId: 'qqs46q4svgndgqsbs',
//           productName: 'Sla',
//           amount: 1,
//        },
//     ],
//     status: 'Pending',
//     dateUpdated: '07-06-2022',
//  };

const OrderForm = ({
   order,
   edit,
   onSubmit,
   onCancelEdit,
   confirmText,
   users,
}) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      setValue,
      getValues,
   } = useForm(orderFormOptions);

   useEffect(() => {
      reset(order);
   }, [reset, order]);

   const handleCancelEdit = () => {
      reset();
      onCancelEdit();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="orderFormContainer">
         <div className="inputGrid">
            <label>Order Id:</label>
            <FormInput
               name="_id"
               type="text"
               disabled={true}
               register={register}
            />

            <label className="productsLabel">Producten:</label>
            <div className="orderProducts">
               <div className="productOverviewTable">
                  <SubProductTable products={order.products} />
               </div>
            </div>

            <label>Besteller:</label>
            <FormDropdown
               options={users}
               name="orderer"
               disabled={!edit}
               register={register}
               error={errors.orderer}
               setValue={setValue}
            />

            <label>Bezorger:</label>
            <FormDropdown
               options={users}
               name="deliverer"
               disabled={!edit}
               register={register}
               error={errors.deliverer}
               setValue={setValue}
            />

            <label>Status:</label>
            <FormDropdown
               options={ORDER_STATUS}
               name="status"
               disabled={!edit}
               register={register}
               error={errors.status}
               setValue={setValue}
               getValues={getValues}
               isStatus
            />

            <label>Datum:</label>
            <FormInput
               name="dateUpdated"
               type="text"
               disabled={true}
               register={register}
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

export default OrderForm;
