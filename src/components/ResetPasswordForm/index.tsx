import React from "react";
import {
  LoginBox,
  LoginTitle,
  FieldBox,
  IconBox,
  FormButtons,
  MessageField,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form } from "react-final-form";
import { AuthMain, AuthSecond } from "../../styles/buttons";
import { fields } from "./fields";
import { resetPassword } from "../../redux/actions/auth";
import { validatePasswords } from "../../validate/validateAuth";
import { StyledLink } from "../../styles/utils";
import { useParams } from "react-router";

interface IParams {
  hash: string;
}

export const ResetPasswordForm: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector(({ auth }: any) => auth.message) || "";
  const { hash }: IParams = useParams();

  const onSubmit = (values: any) => {
    dispatch(resetPassword({ ...values, token: hash }));
  };
  return (
    <LoginBox>
      <LoginTitle>Choose a new password</LoginTitle>
      <Form
        onSubmit={onSubmit}
        validate={validatePasswords}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <FieldBox key={field.name}>
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
              <AuthSecond type="submit">Set password</AuthSecond>
              {message === "Password changed successfully" && (
                <AuthMain type="button">
                  <StyledLink to="/login">Log in</StyledLink>
                </AuthMain>
              )}
            </FormButtons>
          </form>
        )}
      />
    </LoginBox>
  );
};

export default ResetPasswordForm;
