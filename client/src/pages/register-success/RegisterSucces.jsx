import { Check } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './register-succes.scss';

const RegisterSucces = () => {
  const handlerResendMailClick = () => {
    console.log('Verzend opnieuw');
  };

  return (
    <div className="registerSuccessContainer">
      <div className="bodyContainer">
        <div className="top">
          <Check className="checkIcon" />
          <div className="text">
            <h2>Succesvol geregistreerd!</h2>
            <span>
              We hebben u een mail gestuurd om uw account te bevestigen.
            </span>
          </div>
        </div>

        <div className="subText">
          Geen mail gekregen? Check zeker je spam folder of{' '}
          <div className="link" onClick={handlerResendMailClick}>
            <span>verzend de bevestigingsmail opnieuw.</span>
          </div>
        </div>
        <Link to="/login" className="link">
          <span>Naar de login pagina</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterSucces;
