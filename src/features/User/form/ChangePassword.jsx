import { Check, Clear } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../components/button/Button';
import FormInput from '../../../components/input/FormInput';
import { PasswordEditFormOptions } from '../validation';

const ChangePassword = ({ user, edit, onSubmit, onCancelEdit }) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm(PasswordEditFormOptions);

   useEffect(() => {
      reset(user);
   }, [reset, user]);

   return (
      <form
         className="changePasswordContainer"
         onSubmit={handleSubmit(onSubmit)}
      >
         <Collapse in={edit} timeout="auto" unmountOnExit className="collaps">
            <div className="passwordContainer">
               <FormInput
                  label="Huidig wachtwoord"
                  name="currentPassword"
                  type="password"
                  disabled={!edit}
                  register={register}
                  error={errors.currentPassword}
               />
            </div>

            <div className="passwordContainer">
               <FormInput
                  label="Nieuw wachtwoord"
                  name="newPassword"
                  type="password"
                  disabled={!edit}
                  register={register}
                  error={errors.newPassword}
               />
            </div>

            <div className="passwordContainer">
               <FormInput
                  label="Herhaal nieuw wachtwoord"
                  name="confirmNewPassword"
                  type="password"
                  disabled={!edit}
                  register={register}
                  error={errors.confirmNewPassword}
               />
            </div>
         </Collapse>

         {edit && (
            <div className="buttonContainer">
               <Button
                  startIcon={Clear}
                  onClick={onCancelEdit}
                  className="button"
               >
                  Annuleer
               </Button>
               <Button type="submit" startIcon={Check} className="button">
                  Update
               </Button>
            </div>
         )}
      </form>
   );
};

export default ChangePassword;
