import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import InfoPage from "./components/RegisterConfirm";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

export const App: React.FC = () => {
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
          <InfoPage/>
        </Route>
        <ProtectedRoute path="/">
          <div>321</div>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
