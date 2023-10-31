import '../../assets/styles/pages/auth/loginPage.scss';
import Container from '../../components/ui/Container';
import LoginForm from '../../features/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <Container className="loginContainer">
        <div className="top">
          <h1>Herman's hobbyshop</h1>
        </div>
        <LoginForm />
      </Container>
    </div>
  );
};

export default LoginPage;
