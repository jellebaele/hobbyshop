import React from 'react';
import Header from '../../components/header/Header';
import UserOverview from '../../features/User/UserOverview';
import './profile.scss';

/**
 * _id
 * FirstName
 * Lastname
 * Username
 * email
 * password
 * salt?
 * isAdmin
 * Status
 * TimeCreated
 * TimeUpdated
 */

const user = {
   _id: 'qdfq6dsfq321qs',
   firstName: 'Jelle',
   lastName: 'Baele',
   username: 'jelle123',
   email: 'jellebaele@test.com',
   isAdmin: true,
   status: 'active',
   timeCreated: '10-08-2022',
};

const Profile = () => {
   return (
      <div className="profileContainer">
         <Header pageTitle={'Mijn profiel'} />
         <div className="bodyContainer">
            <UserOverview user={user} />
         </div>
      </div>
   );
};

export default Profile;
