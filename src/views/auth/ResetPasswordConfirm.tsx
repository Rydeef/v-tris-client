import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearMessage } from "../../redux/actions/auth";
import AuthLayout from "../../components/AuthLayot";
import ResetPasswordForm from "../../components/ResetPasswordForm";

export const ResetPasswordConfirm: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordConfirm;
