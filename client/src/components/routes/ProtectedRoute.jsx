import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  // If children are present in the "element" prop of a Route component, render these
  // Otherwise, render children of the route element
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
