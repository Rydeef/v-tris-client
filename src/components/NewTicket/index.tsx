import React, { useEffect, useState } from "react";
import {
  NewTicketBox,
  TicketForm,
  InputContainer,
  TicketIcon,
  TicketButtons,
  SubmitTicket,
} from "./styles";
import { Field, Form } from "react-final-form";
import TicketField from "../TicketField";
import dateFromIcon from "../../assets/svg/dateFrom.svg";
import dateToIcon from "../../assets/svg/dateTo.svg";
import priorityIcon from "../../assets/svg/priority.svg";
import closeIcon from "../../assets/svg/close.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ICreateTicket } from "../../redux/types/columns";
import { useDispatch } from "react-redux";
import { createTicket } from "../../redux/actions/columns";

interface NewTicketProps {
  column: string;
  handleClose: Function;
}
export const NewTicket: React.FC<NewTicketProps> = ({
  column,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    const reqObj: ICreateTicket = {
      title: values.ticketName,
      columnId: column,
    };
    dispatch(createTicket(reqObj));
  };
  return (
    <NewTicketBox>
      <TicketForm>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <InputContainer>
                <TicketIcon onClick={handleClose("")} src={closeIcon} alt="" />
                <Field
                  name="ticketName"
                  type="text"
                  placeholder="Task name"
                  component={TicketField}
                />
              </InputContainer>
              <InputContainer>
                <TicketButtons>
                  <TicketIcon src={priorityIcon} alt="" />
                </TicketButtons>
                <SubmitTicket type="submit">Save</SubmitTicket>
              </InputContainer>
            </form>
          )}
        />
      </TicketForm>
    </NewTicketBox>
  );
};

export default NewTicket;
