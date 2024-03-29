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
  name: Yup.string()
    .required('Voornaam is verplicht')
    .min(3, 'Voornaam moet minstens 3 karakters lang zijn')
    .max(128, 'Voornaam mag niet langer zijn dan 128 karakters'),
  lastname: Yup.string()
    .required('Achternaam is verplicht')
    .min(3, 'Achternaam moet minstens 3 karakters lang zijn')
    .max(128, 'Achternaam mag niet langer zijn dan 128 karakters'),
  username: Yup.string()
    .required('Gebruikersnaam is verplicht')
    .min(3, 'Gebruikers moet minstens 3 karakters lang zijn')
    .max(128, 'Gebruikersnaam mag niet langer zijn dan 128 karakters')
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
  password: Yup.string()
    .required('Wachtwoord is verplicht')
    .min(8, 'Wachtwoord moet minstens 8 karakters lang zijn')
    .max(128, 'Wachtwoord mag niet langer zijn dan 128 karakters')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/u,
      'Het wachtwoord moet minstens 1 hoofdletter, 1 cijfer en 1 speciaal karakter bevatten.'
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Wachtwoorden moeten hetzelfde zijn.'
  ),
});

export const RegisterFormOptions = {
  resolver: yupResolver(registerValidationSchema),
};
