import React, { useState } from 'react';
import LoginForm from '../../features/User/form/LoginForm';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCurrentUser,
  login,
  selectCurrentUser,
} from '../../redux/authSlice';
import { useSnackbar } from 'notistack';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const currentUser = useSelector(selectCurrentUser);
  const [requestStatus, setRequestStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      if (requestStatus !== 'pending') {
        setRequestStatus('pending');
        await dispatch(
          login({ username: data.usernameOrEmail, password: data.password })
        ).unwrap();

        await dispatch(fetchCurrentUser()).unwrap();
        setRequestStatus('success');
        enqueueSnackbar('Succesvol ingelogd!', {
          variant: 'success',
        });
        navigate('/');
      }
    } catch (error) {
      setRequestStatus('error');
      console.error('Error logging in: ', error);
      setError('Fout bij het inloggen. Gelieve opnieuw te proberen.');
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
          <LoginForm onSubmit={onSubmit} status={requestStatus} error={error} />
        </div>
        <div className="footer">
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span>Nog geen account? Registreer hier!</span>
          </Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Wachtwoord of gebruikersnaam vergeten?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
