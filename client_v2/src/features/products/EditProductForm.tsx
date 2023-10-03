import '../../assets/styles/features/products/editProductForm.scss'
import { useForm } from 'react-hook-form';
import InputField from '../../components/form/InputField';
import Button from '../../components/ui/Button';
import { useParams } from 'react-router-dom';
import { useProductAggregate } from './hooks/useProductAggregate';
import { IEditProductFormInput } from './EditProductValidationSchema';
import { useState } from 'react';

const EditProductForm = () => {
  const { productId } = useParams();
  const product = useProductAggregate(productId);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IEditProductFormInput>({ defaultValues: product });
  const [isDisabled, setIsDisabled] = useState(true)

  const onCancelEdit = () => {
    reset(product);
    setIsDisabled(true);
  }

  const onDelete = () => {
    throw new DOMException("Not yet implemented.")
  }

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className='editProductFormContainer'>
      <form onSubmit={onSubmit} className="editForm">
        <div className="inputGrid">
          <InputField name='name' label='Naam:' register={register} error={errors?.name} disabled={isDisabled} />
          <InputField name='id' label='Id:' register={register} disabled />
          <InputField name='status' label='Status:' register={register} disabled={isDisabled} />
          <InputField name="category" label="Categorie:" register={register} disabled={isDisabled} />
          <InputField name='user' label='Eigenaar' register={register} disabled={isDisabled} />
          <div className="amountGroup">
            <InputField name="amount" label='Aantal' register={register} className='inputField' disabled={isDisabled} />
            <InputField name="unit" label='Eenheid' register={register} className='inputField' disabled={isDisabled} />
          </div>
          <InputField name='createdAt' label='Laatst bijgewerkt: ' register={register} disabled />
        </div>
        {!isDisabled && <div className='buttonGroup'>
          <Button type='button' className='button' onClick={onCancelEdit}>Annuleer</Button>
          <Button type='submit' className='button'>Wijzig</Button>
        </div>}
      </form>
      {isDisabled && <div className="buttonGroup">
        <Button className='button' onClick={onDelete}>Verwijder</Button>
        <Button className='button' onClick={() => setIsDisabled(false)}>Bewerk</Button>
      </div>}
    </div>
  )
}

export default EditProductForm