import React from 'react';
import { useForm } from 'react-hook-form';
import FormInputGroup from '../../../components/form/FormInputGroup';
import { LoginFormOptions } from './validation';
import './login-form.scss';
import { ArrowForward } from '@mui/icons-material';
import ValidationError from '../../../components/validation-error/ValidationError';
import SubmitButton from '../../../components/form/SubmitButton';

const LoginForm = ({ onSubmit, status, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(LoginFormOptions);

  return (
    <form className="loginFormContainer" onSubmit={handleSubmit(onSubmit)}>
      <FormInputGroup
        label="Gebruikersnaam"
        name="usernameOrEmail"
        type="text"
        register={register}
        error={errors.usernameOrEmail}
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
      {error && <ValidationError message={error} />}
      <div className="buttonContainer">
        <SubmitButton text="Login" status={status} endIcon={ArrowForward} />
      </div>
    </form>
  );
};

export default LoginForm;
