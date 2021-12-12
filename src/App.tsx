import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import InfoPage from "./components/RegisterConfirm";
import history from "./utils/history";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import ResetPassword from "./views/auth/ResetPassword";
import ResetPasswordConfirm from "./views/auth/ResetPasswordConfirm";
import Workspace from "./views/workspaces/Workspace";

export const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/register/confirm/:hash">
          <InfoPage />
        </Route>
        <Route exact path="/login/reset">
          <ResetPassword />
        </Route>
        <Route exact path="/login/reset/:hash">
          <ResetPasswordConfirm />
        </Route>
        <ProtectedRoute exact path="/">
          <Workspace />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
