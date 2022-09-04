import React from 'react';
import RegisterForm from '../../features/User/form/RegisterForm';
import './register.scss';

const Register = () => {
   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className="registerContainer">
         <div className="bodyContainer">
            <div className="top">
               <h4 className="subTitle">Premium Quality</h4>
               <h1>Herman's hobbyshop</h1>
            </div>
            <div className="bottom">
               <span>Registreer</span>
               <RegisterForm onSubmit={onSubmit} />
            </div>
         </div>
      </div>
   );
};

export default Register;
