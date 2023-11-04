import React from 'react';
import { Navigate } from 'react-router-dom';
import { IRequireAuthProps } from './RequireAuth.types';

const RequireAuth: React.FC<IRequireAuthProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequireAuth;
