import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import UserOverview from '../../features/User/UserOverview';
import { selectCurrentUser } from '../../redux/authSlice';
import './profile.scss';

const Profile = () => {
  const user = useSelector(selectCurrentUser);

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
