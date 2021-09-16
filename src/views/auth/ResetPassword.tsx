import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearMessage } from "../../redux/actions/auth";
import AuthLayout from "../../components/AuthLayot";
import ResetForm from "../../components/ResetForm";

export const ResetPassword: React.FC = () => {



  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  
  return (
    <AuthLayout>
      <ResetForm/>
    </AuthLayout>
  );
};

export default ResetPassword;
