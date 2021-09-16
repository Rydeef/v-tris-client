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
import { AuthSecond } from "../../styles/buttons";
import { fields } from "./fields";
import { sendResetLetter } from "../../redux/actions/auth";
import { validateEmail } from '../../validate/validateAuth';

export const ResetForm: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector(({ auth }: any) => auth.message) || "";
  const onSubmit = (values: any) => {
    dispatch(sendResetLetter(values));
    console.log(values);
  };
  return (
    <LoginBox>
      <LoginTitle>Reset Password</LoginTitle>
      <Form
        onSubmit={onSubmit}
        validate={validateEmail}
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
              <AuthSecond type="submit">Send</AuthSecond>
            </FormButtons>
          </form>
        )}
      />
    </LoginBox>
  );
};

export default ResetForm;
