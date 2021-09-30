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
import userLinkingIcon from "../../assets/svg/userLinking.svg";
import dateFromIcon from "../../assets/svg/dateFrom.svg";
import dateToIcon from "../../assets/svg/dateTo.svg";
import priorityIcon from "../../assets/svg/priority.svg";
import closeIcon from "../../assets/svg/close.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface NewTicketProps {
  column: string;
  handleClose: Function;
}
export const NewTicket: React.FC<NewTicketProps> = ({
  column,
  handleClose,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const changeEndDate = (date: any) => {
    setEndDate(date);
  };
  const changeStartDate = (date: any) => {
    setStartDate(date);
  };
  useEffect(() => {
    console.log(startDate, endDate);
  }, [startDate, endDate]);
  const onSubmit = (values: any) => {
    const reqObj = {
      name: values.ticketName,
      startDate,
      endDate,
    };
    console.log(reqObj);
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
                <TicketIcon src={userLinkingIcon} alt="" />
              </InputContainer>
              <InputContainer>
                <TicketButtons>
                  <DatePicker
                    selected={startDate}
                    onChange={changeStartDate}
                    customInput={<img src={dateFromIcon} alt="" />}
                    withPortal
                    showTimeSelect
                    selectsStart
                    dateFormat="MMMM d, yyyy h:mm aa"
                    shouldCloseOnSelect={false}
                    timeFormat="HH:mm"
                    calendarClassName="calendar-fields"
                  />

                  <DatePicker
                    selected={endDate}
                    onChange={changeEndDate}
                    customInput={<img src={dateToIcon} alt="" />}
                    withPortal
                    showTimeSelect
                    selectsEnd
                    dateFormat="MMMM d, yyyy h:mm aa"
                    shouldCloseOnSelect={false}
                    timeFormat="HH:mm"
                    calendarClassName="calendar-fields"
                  />

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
