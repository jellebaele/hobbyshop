import React from 'react';
import { useForm } from 'react-hook-form';
import FormInputGroup from '../../../components/form/FormInputGroup';
import { RegisterFormOptions } from './validation';
import './register-form.scss';
import { Button } from '../../../components/button/Button';

const RegisterForm = ({ onSubmit }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm(RegisterFormOptions);

   return (
      <form className="registerFormContainer" onSubmit={handleSubmit(onSubmit)}>
         <FormInputGroup
            label="Voornaam"
            name="surname"
            type="text"
            register={register}
            error={errors.surname}
            className="formInput"
         />

         <FormInputGroup
            label="Achternaam"
            name="lastname"
            type="text"
            register={register}
            error={errors.lastname}
            className="formInput"
         />

         <FormInputGroup
            label="Gebruikersnaam"
            name="username"
            type="text"
            register={register}
            error={errors.username}
            className="formInput"
         />

         <FormInputGroup
            label="E-mail"
            name="email"
            type="mail"
            register={register}
            error={errors.email}
            className="formInput"
         />
         <div className="buttonContainer">
            <Button type="submit" className="button">
               Vraag account aan!
            </Button>
         </div>
      </form>
   );
};

export default RegisterForm;
