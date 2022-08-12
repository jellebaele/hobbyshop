import { Edit, Lock } from '@mui/icons-material';
import React, { useState } from 'react';
import { Button } from '../../components/button/Button';
import ChangePassword from './form/ChangePassword';
import UserProfile from './form/UserProfile';
import './user-overview.scss';

const UserOverview = ({ user }) => {
   const [editUserData, setEditUserData] = useState(false);
   const [editPassword, setEditPassword] = useState(false);

   const onSubmit = (data) => {
      console.log(data);
   };

   const handleCancelEdit = () => {
      setEditUserData(false);
      setEditPassword(false);
   };

   return (
      <div className="userOverviewContainer">
         <div className="profileData">
            <UserProfile
               user={user}
               edit={editUserData}
               onSubmit={onSubmit}
               onCancelEdit={handleCancelEdit}
            />
            <ChangePassword
               user={user}
               edit={editPassword}
               onSubmit={onSubmit}
               onCancelEdit={handleCancelEdit}
            />

            {!(editUserData || editPassword) && (
               <div className="buttonContainer">
                  <Button
                     startIcon={Edit}
                     onClick={() => setEditUserData(true)}
                     className="button"
                  >
                     Bewerk
                  </Button>
                  <Button
                     startIcon={Lock}
                     className="button"
                     onClick={() => setEditPassword(true)}
                  >
                     Wijzig wachtwoord
                  </Button>
               </div>
            )}
         </div>
      </div>
   );
};

export default UserOverview;
