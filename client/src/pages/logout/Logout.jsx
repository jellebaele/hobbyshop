import { CircularProgress } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/authSlice';
import './logout.scss';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    const logoutUser = async () => {
      await dispatch(logout()).unwrap();

      navigate('/login');
    };

    logoutUser();
  }, [navigate, dispatch]);

  if (status === 'pending') {
    return (
      <div className="logoutContainer">
        <h3 className="title">Bezig met uitloggen...</h3>
        <CircularProgress />
      </div>
    );
  }

  // if (status === 'rejected') {
  //   return <div>Probleem bij het uitlogg</div>;
  // }
};

export default Logout;
