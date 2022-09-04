import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../components/button/Button';
import FormInputGroup from '../../../components/form/FormInputGroup';
import { LoginFormOptions } from './validation';
import './login-form.scss';
import { ArrowForward } from '@mui/icons-material';

const LoginForm = ({ onSubmit }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm(LoginFormOptions);

   return (
      <form className="loginFormContainer" onSubmit={handleSubmit(onSubmit)}>
         <FormInputGroup
            label="Gebruikersnaam of e-mail"
            name="usernameOrPassword"
            type="text"
            register={register}
            error={errors.usernameOrPassword}
            className="formInput"
         />

         <FormInputGroup
            label="Wachtwoord"
            name="password"
            type="password"
            register={register}
            error={errors.password}
            className="formInput"
         />
         <div className="buttonContainer">
            <Button type="submit" className="button" endIcon={ArrowForward}>
               Login
            </Button>
         </div>
      </form>
   );
};

export default LoginForm;
