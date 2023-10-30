import Container from '../../components/ui/Container';
import LoginForm from '../../features/auth/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <div className="top">
        <h1>Herman's hobbyshop</h1>
      </div>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
