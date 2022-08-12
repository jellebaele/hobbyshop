import { Collapse } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmForm from '../../../components/form/ConfirmForm';
import FormInputGroup from '../../../components/form/FormInputGroup';
import { PasswordEditFormOptions } from '../validation';

const ChangePasswordForm = ({ user, edit, onSubmit, onCancelEdit }) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm(PasswordEditFormOptions);

   useEffect(() => {
      reset(user);
   }, [reset, user]);

   const handleCancelEdit = () => {
      reset();
      onCancelEdit();
   };

   return (
      <form
         className="changePasswordContainer"
         onSubmit={handleSubmit(onSubmit)}
      >
         <Collapse in={edit} timeout="auto" unmountOnExit className="collaps">
            <div className="passwordContainer">
               <FormInputGroup
                  label="Huidig wachtwoord"
                  name="currentPassword"
                  type="password"
                  disabled={!edit}
                  register={register}
                  error={errors.currentPassword}
               />
            </div>

            <div className="passwordContainer">
               <FormInputGroup
                  label="Nieuw wachtwoord"
                  name="newPassword"
                  type="password"
                  disabled={!edit}
                  register={register}
                  error={errors.newPassword}
               />
            </div>

            <div className="passwordContainer">
               <FormInputGroup
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
            <ConfirmForm confirmText="Update" onCancel={handleCancelEdit} />
         )}
      </form>
   );
};

export default ChangePasswordForm;
