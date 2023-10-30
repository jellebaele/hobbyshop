import { useForm } from 'react-hook-form';
import { ILoginFormInput, loginValidationSchema } from './LoginValidationSchema';
import InputField from '../../components/form/InputField';
import IconButton from '../../components/ui/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({
    resolver: loginValidationSchema,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="loginFormContainer">
      <form onSubmit={onSubmit}>
        <InputField
          name="username"
          label="Gebruikersnaam"
          register={register}
          error={errors?.username}
        />
        <InputField
          name="password"
          label="Wachtwoord"
          register={register}
          error={errors?.password}
          type="password"
        />

        <IconButton iconRight={<ArrowForwardIcon />} type="submit">
          Login
        </IconButton>
      </form>
    </div>
  );
};

export default LoginForm;
