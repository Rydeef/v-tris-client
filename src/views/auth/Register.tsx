import React from "react";
import AuthLayout from "../../components/AuthLayot";
import RegisterForm from "../../components/RegisterForm";

export const Register: React.FC = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
