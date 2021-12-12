import React from "react";
import {
  LoginBox,
  LoginTitle,
  FieldBox,
  IconBox,
  FormButtons,
  LogInSpan,
  HaveAccount,
  MessageField,
} from "./styles";
import { Field, Form } from "react-final-form";
import { AuthMain } from "../../styles/buttons";
import { validateRegister } from "../../validate/validateAuth";
import { StyledLink } from "../../styles/utils";
import { fields } from "./fields";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/auth";
import { IUser } from "../../redux/types/auth";

export const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector(({ auth }: any) => auth.message) || "";
  const onSubmit = (values: IUser) => {
    dispatch(registerUser(values));
  };
  return (
    <LoginBox>
      {message === "A confirmation email has been sent to your email" ? (
        <>
          <LoginTitle>{message}</LoginTitle>
          <FormButtons>
            <AuthMain type="button">
              <StyledLink to="/login">Log in</StyledLink>
            </AuthMain>
          </FormButtons>
        </>
      ) : (
        <>
          <LoginTitle>Account Creating</LoginTitle>

          <Form
            onSubmit={onSubmit}
            validate={validateRegister}
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
                  <AuthMain type="submit">Create an account</AuthMain>
                  <HaveAccount>
                    Already have an account?
                    <StyledLink to="/login">
                      <LogInSpan>Log in</LogInSpan>
                    </StyledLink>
                  </HaveAccount>
                </FormButtons>
              </form>
            )}
          />
        </>
      )}
    </LoginBox>
  );
};

export default RegisterForm;
