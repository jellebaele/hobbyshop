import React from 'react';
import { useForm } from 'react-hook-form';
import FormInputGroup from '../../../components/form/FormInputGroup';
import { RegisterFormOptions } from './validation';
import './register-form.scss';
import ValidationError from '../../../components/validation-error/ValidationError';
import SubmitButton from '../../../components/form/SubmitButton';
import { ArrowForward } from '@mui/icons-material';

const RegisterForm = ({ onSubmit, error, status }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(RegisterFormOptions);

  return (
    <form className="registerFormContainer" onSubmit={handleSubmit(onSubmit)}>
      <FormInputGroup
        label="Voornaam"
        name="name"
        type="text"
        register={register}
        error={errors.name}
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
      <FormInputGroup
        label="Wachtwoord"
        name="password"
        type="password"
        register={register}
        error={errors.password}
        className="formInput"
      />
      <FormInputGroup
        label="Wachtwoord bevestigen"
        name="passwordConfirmation"
        type="password"
        register={register}
        error={errors.passwordConfirmation}
        className="formInput"
      />
      <div className="generalValidationError">
        {error && <ValidationError message={error} />}
      </div>
      <div className="buttonContainer">
        <SubmitButton
          text={'Registreer'}
          status={status}
          endIcon={ArrowForward}
        />
        {/* <Button type="submit" className="button">
          Registreer
        </Button> */}
      </div>
    </form>
  );
};

export default RegisterForm;
