import { Check } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './register-succes.scss';

const RegisterSucces = () => {
   return (
      <div className="registerSuccessContainer">
         <div className="bodyContainer">
            <div className="top">
               <Check className="checkIcon" />
               <span>
                  Aanvraag succesvol ingediend. Van zodra uw verzoek is
                  verwerkt, krijgt u een bevestingsmail!
               </span>
            </div>

            <Link to="/login" className="link">
               <span>Naar de login pagina</span>
            </Link>
         </div>
      </div>
   );
};

export default RegisterSucces;
