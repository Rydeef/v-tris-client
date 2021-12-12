import React from "react";
import { NewColumnBox, SubmitTicket } from "./styles";
import { Field, Form } from "react-final-form";
import { InputContainer } from "../NewTicket/styles";
import TicketField from "../TicketField";
import { useDispatch } from "react-redux";
import { createColumn } from "../../redux/actions/columns";

export const NewColumn: React.FC = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    dispatch(createColumn(values));
  };
  return (
    <NewColumnBox>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <Field
                name="title"
                type="text"
                placeholder="Column title"
                component={TicketField}
              />
              <SubmitTicket type="submit">Save</SubmitTicket>
            </InputContainer>
          </form>
        )}
      />
    </NewColumnBox>
  );
};

export default NewColumn;
