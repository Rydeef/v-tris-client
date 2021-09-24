import React from "react";
import TextField from "@material-ui/core/TextField";
import { StyledField } from "./styles";
import { ErrorMessage } from "../../styles/utils";

interface AuthFieldProps {
  [x: string]: any;
}

const TicketField: React.FC<AuthFieldProps> = ({
  label,
  input,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <StyledField>
      <TextField {...input} {...custom} />
      <ErrorMessage>{touched && error && error}</ErrorMessage>
    </StyledField>
  );
};

export default TicketField;
