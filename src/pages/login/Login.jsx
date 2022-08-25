import React from 'react';
import LoginForm from '../../features/User/form/LoginForm';
import './login.scss';

const Login = () => {
   const onSubmit = (data) => {
      console.log(data);
   };
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
         </div>
      </div>
   );
};

export default Login;
