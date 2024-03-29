import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductStatus, productStatus } from '../../../models/Product';

// const possibleStatus = ['Actief', 'Inactief'];

export interface IEditProductFormInput {
  name: string;
  status: ProductStatus;
  amount: number;
  unit: string;
  user: string;
  category: string;
}

const productValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'De naam moet minstens 3 karakters lang zijn')
    .required('Naam is verplicht.'),
  status: Yup.string()
    .required('De status is verplicht.')
    .oneOf(
      productStatus,
      `De status moet een van volgende waardes zijn: ${productStatus}`
    ),
  amount: Yup.number()
    .integer()
    .moreThan(0, 'Het aantal mag niet negatief zijn.')
    .required('Een aantal is verplicht'),
  unit: Yup.string().required('De eenheid is verplicht.'),
  user: Yup.string().required('De gebruiker is verplicht.'),
  category: Yup.string().required('De categorie is verplicht.'),
});

export const editProductValidationSchema = yupResolver(productValidationSchema);
