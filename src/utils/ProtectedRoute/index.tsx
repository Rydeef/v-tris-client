import React from "react";
import { Route, Redirect } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  [x: string]: any;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("vTrisAccessToken") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
