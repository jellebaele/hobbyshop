import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
   title: Yup.string().required('Titel is verplicht.'),
   category: Yup.string().required('Categorie is verplicht.'),
   description: Yup.string().max(
      250,
      'De beschrijving mag maximaal 250 karakters lang zijn.'
   ),
   status: Yup.string().required('Status is verplicht.'),
});

export const productFormOptions = { resolver: yupResolver(validationSchema) };
