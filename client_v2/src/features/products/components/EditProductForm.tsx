import '../../../assets/styles/features/products/editProductForm.scss';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/form/InputField';
import {
  IEditProductFormInput,
  editProductValidationSchema,
} from '../validation/EditProductValidationSchema';
import { useState } from 'react';
import IconButton from '../../../components/ui/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch } from '../../../context/hooks';
import { postDeleted, postUpdated } from '../context/productsSlice';
import { Product } from '../../../models/Product';
import { useSmoothNavigation } from '../../../hooks/useSmoothNavigation';
import SearchBarCategories from '../../categories/SearchBarCategories';

const EditProductForm = ({ product }: { product?: Product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<IEditProductFormInput>({
    defaultValues: { ...product },
    resolver: editProductValidationSchema,
  });
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const { navigateTo } = useSmoothNavigation();

  const onCancelEdit = () => {
    reset(product);
    setIsFormDisabled(true);
  };

  const onDelete = () => {
    if (product) {
      dispatch(postDeleted(product));
      navigateTo('/products');
    } else {
      alert('Error');
    }
  };

  const onSubmit = handleSubmit((data) => {
    const updateProductProps = { ...product, ...data };
    dispatch(postUpdated(updateProductProps as Product));
    setIsFormDisabled(true);
  });

  return (
    <div className="editProductFormContainer">
      <form onSubmit={onSubmit} className="editForm">
        <div className="inputGrid">
          <InputField
            name="name"
            label="Naam"
            register={register}
            error={errors?.name}
            disabled={isFormDisabled}
          />
          <InputField name="id" label="Id" register={register} disabled />
          <InputField name="status" label="Status" register={register} disabled={isFormDisabled} />
          <SearchBarCategories
            name="category"
            label="Categorie"
            register={register}
            setValue={setValue}
            getValues={getValues}
            disabled={isFormDisabled}
          />
          <InputField name="user" label="Eigenaar" register={register} disabled />
          <div className="amountGroup">
            <InputField
              name="amount"
              label="Aantal"
              register={register}
              className="inputField"
              disabled={isFormDisabled}
              error={errors?.amount}
              type="number"
            />
            <InputField
              name="unit"
              label="Eenheid"
              register={register}
              className="inputField"
              disabled={isFormDisabled}
              error={errors?.unit}
            />
          </div>
          <InputField name="createdAt" label="Laatst bijgewerkt: " register={register} disabled />
        </div>

        {!isFormDisabled && (
          <div className="buttonGroup">
            <div className="button">
              <IconButton iconLeft={<CancelIcon />} type="button" onClick={onCancelEdit}>
                Annuleer
              </IconButton>
            </div>
            <IconButton iconLeft={<CheckIcon />} type="submit">
              Wijzig
            </IconButton>
          </div>
        )}
      </form>
      {isFormDisabled && (
        <div className="buttonGroup">
          <div className="button">
            <IconButton iconLeft={<DeleteIcon />} onClick={onDelete}>
              Verwijder
            </IconButton>
          </div>

          <IconButton iconLeft={<EditIcon />} onClick={() => setIsFormDisabled(false)}>
            Bewerk
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default EditProductForm;
