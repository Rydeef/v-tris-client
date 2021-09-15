import React from "react";
import {
  LoginBox,
  LoginTitle,
  FieldBox,
  IconBox,
  FormButtons,
  MessageField,
} from "./styles";
import { Field, Form } from "react-final-form";

import { AuthMain, AuthSecond, ForgotButton } from "../../styles/buttons";
import { validateLogin } from "../../validate/validateAuth";
import { StyledLink } from "../../styles/utils";
import { fields } from "./fields";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/auth";
import { IUserLogin } from "../../redux/types/auth";

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector(({ auth }: any) => auth.message) || "";
  const onSubmit = (values: IUserLogin) => {
    dispatch(loginUser(values));
    console.log(values);
  };
  return (
    <LoginBox>
      <LoginTitle>Login</LoginTitle>

      <Form
        onSubmit={onSubmit}
        validate={validateLogin}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <FieldBox>
                <IconBox>{<field.icon fontSize="large" />}</IconBox>
                <Field
                  name={field.name}
                  label={field.label}
                  component={field.component}
                  type={field.type}
                />
              </FieldBox>
            ))}
            <FormButtons>
              <MessageField>{message}</MessageField>
              <AuthMain type="submit">Login</AuthMain>
              <ForgotButton type="button">
                <StyledLink to="/login/forgot">Forgot password?</StyledLink>
              </ForgotButton>

              <AuthSecond type="button">
                <StyledLink to="/register">Create an account </StyledLink>
              </AuthSecond>
            </FormButtons>
          </form>
        )}
      />
    </LoginBox>
  );
};

export default LoginForm;
