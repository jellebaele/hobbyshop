import { Collapse } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmForm from '../../../components/form/ConfirmForm';
import FormInput from '../../../components/input/FormInput';
import { UserEditFormOptions } from '../validation';

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
      <form className="userProfileContainer" onSubmit={handleSubmit(onSubmit)}>
         <div className="formRow">
            <FormInput
               label="Voornaam"
               name="firstName"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.firstName}
            />

            <FormInput
               label="Achternaam"
               name="lastName"
               type="text"
               disabled={!edit}
               register={register}
               error={errors.lastName}
            />
         </div>

         <div className="formRow">
            <FormInput
               label="Email"
               name="email"
               type="email"
               disabled={!edit}
               register={register}
               error={errors.email}
            />

            <FormInput
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
               <FormInput
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
