import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const editUserValidationSchema = Yup.object().shape({
  name: Yup.string().required('Voornaam is verplicht.'),
  lastname: Yup.string().required('Achternaam is verplicht.'),
  email: Yup.string().email().required('E-mail is verplicht.'),
  username: Yup.string().required('Gebruikersnaam is verplicht.'),
  currentPassword: Yup.string()
    .required('Wachtwoord is verplicht.')
    .test(
      'Correct password',
      'Huidig wachtwoord niet correct',
      function (value) {
        return true;
      }
    ),
});

export const UserEditFormOptions = {
  resolver: yupResolver(editUserValidationSchema),
};

const editPasswordValidationScehma = Yup.object().shape({
  currentPassword: Yup.string()
    .required('Wachtwoord is verplicht.')
    .test(
      'Correct password',
      'Huidig wachtwoord niet correct',
      function (value) {
        return true;
      }
    ),
  newPassword: Yup.string()
    .required('Wachtwoord is verplicht')
    .min(10, 'Het wachtwoord moet minimaal 10 karakters lang zijn'),
  confirmNewPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Wachtwoorden moeten hetzelfde zijn.'
  ),
});

export const PasswordEditFormOptions = {
  resolver: yupResolver(editPasswordValidationScehma),
};

const loginValidationSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required('Gebruikersnaam/e-mail is verplicht'),
  password: Yup.string().required('Wachtwoord is verplicht'),
});

export const LoginFormOptions = {
  resolver: yupResolver(loginValidationSchema),
};

const registerValidationSchema = Yup.object().shape({
  surname: Yup.string()
    .required('Voornaam is verplicht')
    .min(2, 'Voornaam moet minstens 2 karakters lang zijn')
    .max(30, 'Voornaam mag niet langer zijn dan 30 karakters'),
  lastname: Yup.string()
    .required('Achternaam is verplicht')
    .min(2, 'Achternaam moet minstens 2 karakters lang zijn')
    .max(30, 'Achternaam mag niet langer zijn dan 30 karakters'),
  username: Yup.string()
    .required('Gebruikersnaam is verplicht')
    .min(2, 'Gebruikers moet minstens 2 karakters lang zijn')
    .max(30, 'Gebruikersnaam mag niet langer zijn dan 30 karakters')
    .test(
      'Correct username',
      'Gebruikersnaam is reeds in gebruik',
      function (value) {
        return true;
      }
    ),
  email: Yup.string()
    .email('Geen geldig e-mail adres')
    .required('E-mail adres is verplicht'),
});

export const RegisterFormOptions = {
  resolver: yupResolver(registerValidationSchema),
};
