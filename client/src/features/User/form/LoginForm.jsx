import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../components/button/Button';
import FormInputGroup from '../../../components/form/FormInputGroup';
import { LoginFormOptions } from './validation';
import './login-form.scss';
import { ArrowForward } from '@mui/icons-material';
import ValidationError from '../../../components/validation-error/ValidationError';

const LoginForm = ({ onSubmit, status, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(LoginFormOptions);

  const renderSubmitButton = (status) => {
    if (status === 'pending') {
      return (
        <Button type="submit" className="button" disabled>
          Even geduld...
        </Button>
      );
    }

    return (
      <Button type="submit" className="button" endIcon={ArrowForward}>
        Login
      </Button>
    );
  };

  return (
    <form className="loginFormContainer" onSubmit={handleSubmit(onSubmit)}>
      <FormInputGroup
        label="Gebruikersnaam of e-mail"
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
      <div className="buttonContainer">{renderSubmitButton(status)}</div>
    </form>
  );
};

export default LoginForm;
