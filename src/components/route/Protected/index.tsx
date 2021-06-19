import React, { useEffect, useState } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

export interface IProtectedRouteProps extends RouteProps {
    fallbackRedirect: string;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = (props) => {
  const { fallbackRedirect } = props;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    // TODO: Implement auth logic.
  }, []);

  return isAuthenticated ? <Route {...props} /> : <Redirect to={fallbackRedirect} />;
};

export default ProtectedRoute;
