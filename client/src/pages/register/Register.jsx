import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import RegisterForm from '../../features/User/form/RegisterForm';
import { selectCurrentUser } from '../../redux/authSlice';
import authService from '../../services/authService';
import './register.scss';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [requestStatus, setRequestStatus] = useState('idle');
  const currentUser = useSelector(selectCurrentUser);

  const onSubmit = async (data) => {
    try {
      if (requestStatus !== 'pending') {
        setRequestStatus('pending');
        const response = await authService.register(data);

        if (response.status === 200 || response.status === 201) {
          setRequestStatus('idle');
          return navigate('/register/success');
        }

        setError(
          'Een onbekende fout is opgetreden. Gelieve contact op te nemen met de beheerder'
        );
        setRequestStatus('error');
      }
    } catch (error) {
      console.error('Error while registering: ', error.response.data);
      setError(error?.response?.data?.message || 'Fout bij het registreren');
      setRequestStatus('error');
    }
  };

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="registerContainer">
      <div className="bodyContainer">
        <div className="top">
          <h4 className="subTitle">Premium Quality</h4>
          <h1>Herman's hobbyshop</h1>
        </div>
        <div className="bottom">
          <span>Vul je gegevens in</span>
          <RegisterForm
            onSubmit={onSubmit}
            error={error}
            status={requestStatus}
          />
        </div>
        <div className="footer">
          <Link
            to="/login"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span>Reeds een account? Log hier in!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
