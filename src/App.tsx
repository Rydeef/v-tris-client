import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import InfoPage from "./components/RegisterConfirm";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import ResetPassword from "./views/auth/ResetPassword";
import ResetPasswordConfirm from "./views/auth/ResetPasswordConfirm";
import Homepage from "./views/homepage/Homepage";
import Workspace from "./views/workspaces/Workspace";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./redux/actions/user";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());

  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="/register/confirm/">
          <InfoPage />
        </Route>
        <Route exact path="/login/reset/">
          <ResetPassword />
        </Route>
        <Route path="/login/reset/">
          <ResetPasswordConfirm />
        </Route>
        <ProtectedRoute exact path="/">
          <Homepage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/workspace/:id">
          <Workspace />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
