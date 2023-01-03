import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import RegisterForm from '../../features/User/form/RegisterForm';
import { selectCurrentUser } from '../../redux/authSlice';
import './register.scss';

const Register = () => {
  const currentUser = useSelector(selectCurrentUser);

  const onSubmit = (data) => {
    console.log(data);
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
          <RegisterForm onSubmit={onSubmit} />
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
