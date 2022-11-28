import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const LoggedInRoute = ({ user, redirectPath = '/login', children }) => {
  const isAllowed = !!user;

  return (
    <ProtectedRoute
      isAllowed={isAllowed}
      redirectPath={redirectPath}
      children={children}
    />
  );
};

export default LoggedInRoute;
