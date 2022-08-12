import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const editUserValidationSchema = Yup.object().shape({
   firstName: Yup.string().required('Voornaam is verplicht.'),
   lastName: Yup.string().required('Achternaam is verplicht.'),
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
