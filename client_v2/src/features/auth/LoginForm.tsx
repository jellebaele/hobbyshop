import '../../assets/styles/features/auth/loginForm.scss';
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
          className="inputField"
        />
        <InputField
          name="password"
          label="Wachtwoord"
          register={register}
          error={errors?.password}
          type="password"
          className="inputField"
        />

        <IconButton iconRight={<ArrowForwardIcon />} type="submit" className="iconButton">
          Login
        </IconButton>
      </form>
    </div>
  );
};

export default LoginForm;
