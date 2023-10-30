import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface ILoginFormInput {
  username: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'De naam moet minstens 3 karakters lang zijn')
    .required('Naam is verplicht.'),
  password: Yup.string().required('Het wachtwoord is verplicht.'),
});

export const loginValidationSchema = yupResolver(loginSchema);
