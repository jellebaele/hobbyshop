import React from 'react';
import LoginForm from '../../features/User/form/LoginForm';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectCurrentUser } from '../../redux/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const onSubmit = async (data) => {
    try {
      await dispatch(
        login({ username: data.usernameOrEmail, password: data.password })
      ).unwrap();

      navigate('/');
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="loginContainer">
      <div className="bodyContainer">
        <div className="top">
          <h4 className="subTitle">Premium Quality</h4>
          <h1>Herman's hobbyshop</h1>
        </div>
        <div className="bottom">
          <LoginForm onSubmit={onSubmit} />
        </div>
        <div className="footer">
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span>Nog geen account? Registreer hier!</span>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Wachtwoord vergeten?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
