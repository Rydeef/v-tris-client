import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthLayout from "../../components/AuthLayot";
import LoginForm from "../../components/LoginForm";
import { clearMessage } from '../../redux/actions/auth';

export const Login: React.FC = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(clearMessage())
  },[dispatch])
  return (
    <AuthLayout>
      <LoginForm/>
    </AuthLayout>
  );
};

export default Login;
