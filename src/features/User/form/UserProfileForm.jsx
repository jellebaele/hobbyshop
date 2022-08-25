import { Collapse } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmForm from '../../../components/form/ConfirmForm';
import FormInputGroup from '../../../components/form/FormInputGroup';
import { UserEditFormOptions } from './validation';
import './user-profile-form.scss';

const UserProfileForm = ({ user, edit, onSubmit, onCancelEdit }) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm(UserEditFormOptions);

   useEffect(() => {
      reset(user);
   }, [reset, user]);

   const handleCancelEdit = () => {
      reset();
      onCancelEdit();
   };

   return (
      <form
         className="userProfileFormContainer"
         onSubmit={handleSubmit(onSubmit)}
      >
         <div className="formRow">
            <FormInputGroup
               label="Voornaam"
               name="firstName"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.firstName}
            />

            <FormInputGroup
               label="Achternaam"
               name="lastName"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.lastName}
            />
         </div>

         <div className="formRow">
            <FormInputGroup
               label="Email"
               name="email"
               type="email"
               disabled={!edit}
               register={register}
               error={errors.email}
            />

            <FormInputGroup
               label="Gebruikersnaam"
               name="username"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.username}
            />
         </div>

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
         </Collapse>

         {edit && (
            <ConfirmForm confirmText="Update" onCancel={handleCancelEdit} />
         )}
      </form>
   );
};

export default UserProfileForm;
