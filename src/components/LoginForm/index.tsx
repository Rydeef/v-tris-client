import React from "react";
import { LoginBox, LoginTitle, FieldBox, IconBox, FormButtons } from "./styles";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Field, Form } from "react-final-form";
import AuthField from "../AuthField/AuthField";
import { AuthMain, AuthSecond, ForgotButton } from '../../styles/buttons';
import { validate } from '../../validate/validateLogin';

export const LoginForm: React.FC = () => {
  const onSubmit = (values: object) => {
    console.log(values);
  };
  return (
    <LoginBox>
      <LoginTitle>Login</LoginTitle>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FieldBox>
              <IconBox>
                <AccountCircleOutlinedIcon fontSize="large" />
              </IconBox>
              <Field name="username" label="Username" component={AuthField} />
            </FieldBox>
            <FieldBox>
              <IconBox>
                <VpnKeyIcon fontSize="large" />
              </IconBox>
              <Field name="password" label="Password" component={AuthField} />
            </FieldBox>
            <FormButtons>
                <AuthMain type="submit">Login</AuthMain>
                <ForgotButton type="button">Forgot password?</ForgotButton>
                <AuthSecond type="button">Create an account</AuthSecond>
            </FormButtons>
          </form>
        )}
      />
    </LoginBox>
  );
};

export default LoginForm;
