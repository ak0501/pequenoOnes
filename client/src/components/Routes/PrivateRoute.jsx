import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthProvider } from "../Firebase/AuthProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthProvider);
  console.log(currentUser);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
