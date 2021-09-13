import React from "react";
import AuthLayout from "../../components/AuthLayot";
import LoginForm from "../../components/LoginForm";

export const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm/>
    </AuthLayout>
  );
};

export default Login;
