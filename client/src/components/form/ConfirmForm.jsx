import { Check, Clear } from '@mui/icons-material';
import React from 'react';
import { Button } from '../button/Button';
import './confirm-form.scss';

const ConfirmForm = ({ confirmText, onCancel }) => {
   return (
      <div className="confirmFormContainer">
         <Button startIcon={Clear} onClick={onCancel} className="button">
            Annuleer
         </Button>
         <Button type="submit" startIcon={Check} className="button">
            {confirmText}
         </Button>
      </div>
   );
};

export default ConfirmForm;
