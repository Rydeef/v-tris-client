import React from "react";
import TextField from "@material-ui/core/TextField";
import { StyledField, FieldLabel } from "./styles";
import { ErrorMessage } from '../../styles/utils';

interface AuthFieldProps {
  [x: string]: any;
}

const AuthField: React.FC<AuthFieldProps> = ({
  label,
  input,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <StyledField>
      <FieldLabel>{label}</FieldLabel>
      <TextField {...input} {...custom} />
      <ErrorMessage>{touched && error && error}</ErrorMessage>
    </StyledField>
  );
};

export default AuthField;
