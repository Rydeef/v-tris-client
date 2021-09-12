import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./views/auth/Login";

export const App: React.FC = () => {
  
  return (
    <Router>
     <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/">
          <div>321</div>
        </ProtectedRoute>
     </Switch>
    </Router>
  );
};

export default App;
