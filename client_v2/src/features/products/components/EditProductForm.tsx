import '../../../assets/styles/features/products/editProductForm.scss';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/form/InputField';
import { useParams } from 'react-router-dom';
import { useProductAggregate } from '../hooks/useProductAggregate';
import { IEditProductFormInput } from '../validation/EditProductValidationSchema';
import { useState } from 'react';
import IconButton from '../../../components/ui/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch } from '../../../context/hooks';
import { postUpdated } from '../context/productsSlice';
import { Product } from '../../../models/Product';

const EditProductForm = () => {
  const { productId } = useParams();
  const product = useProductAggregate(productId);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEditProductFormInput>({ defaultValues: product });
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useAppDispatch();

  const onCancelEdit = () => {
    reset(product);
    setIsDisabled(true);
  };

  const onDelete = () => {
    throw new DOMException('Not yet implemented.');
  };

  const onSubmit = handleSubmit((data) => {
    const updateProductProps = { ...product, ...data };
    dispatch(postUpdated(updateProductProps as Product));
    setIsDisabled(true);
  });

  return (
    <div className="editProductFormContainer">
      <form onSubmit={onSubmit} className="editForm">
        <div className="inputGrid">
          <InputField
            name="name"
            label="Naam:"
            register={register}
            error={errors?.name}
            disabled={isDisabled}
          />
          <InputField name="id" label="Id:" register={register} disabled />
          <InputField
            name="status"
            label="Status:"
            register={register}
            disabled={isDisabled}
          />
          <InputField
            name="category"
            label="Categorie:"
            register={register}
            disabled={isDisabled}
          />
          <InputField
            name="user"
            label="Eigenaar"
            register={register}
            disabled={isDisabled}
          />
          <div className="amountGroup">
            <InputField
              name="amount"
              label="Aantal"
              register={register}
              className="inputField"
              disabled={isDisabled}
            />
            <InputField
              name="unit"
              label="Eenheid"
              register={register}
              className="inputField"
              disabled={isDisabled}
            />
          </div>
          <InputField
            name="createdAt"
            label="Laatst bijgewerkt: "
            register={register}
            disabled
          />
        </div>
        {!isDisabled && (
          <div className="buttonGroup">
            <div className="button">
              <IconButton
                iconLeft={<CancelIcon />}
                type="button"
                onClick={onCancelEdit}>
                Annuleer
              </IconButton>
            </div>
            <IconButton iconLeft={<CheckIcon />} type="submit">
              Wijzig
            </IconButton>
          </div>
        )}
      </form>
      {isDisabled && (
        <div className="buttonGroup">
          <div className="button">
            <IconButton iconLeft={<DeleteIcon />} onClick={onDelete}>
              Verwijder
            </IconButton>
          </div>

          <IconButton
            iconLeft={<EditIcon />}
            onClick={() => setIsDisabled(false)}>
            Bewerk
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default EditProductForm;
