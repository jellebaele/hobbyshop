import '../../assets/styles/features/products/editProductForm.scss'
import { Product } from "../../models/Product"
import { IEditProductFormInput, editProductValidationSchema, } from "./EditProductValidationSchema";
import { useForm } from 'react-hook-form';
import { useEffect } from 'react'
import InputField from '../../components/form/InputField';
import Button from '../../components/ui/Button';

const EditProductForm = ({ product }: { product: Product }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEditProductFormInput>(editProductValidationSchema);

  const onSubmit = handleSubmit((data) => console.log(data));

  useEffect(() => {
    reset(product);
  }, [reset, product]);

  return (
    <form onSubmit={onSubmit} className="editForm">
      <div className="inputGrid">
        <InputField name='name' label='Naam:' register={register} error={errors?.name} />
        <InputField name='id' label='Id:' register={register} disabled />


        {/* <input {...register('status')} /> */}
        {/* {errors?.status?.message} */}
        {/* <input {...register('amount')} /> */}
        {/* {errors?.amount?.message} */}
        {/* <input {...register('unit')} /> */}
        {/* <input {...register('user')} /> */}
        {/* <input {...register('category')} /> */}
        {/* <input value={product.dateUpdated.toDateString()} disabled /> */}
        {/* <input type="submit" /> */}
      </div>
      <Button type='submit'>Wijzig</Button>
    </form>
  )
}

export default EditProductForm