import styled from "styled-components";
import { colors } from "../../theme/colors";

export const NewTicketBox = styled.div`
  width: 400px;
  height: 137px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%237D069BFF' stroke-width='4' stroke-dasharray='12%2c 10%2c 9%2c 7' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
  animation: opening 0.5s forwards;
  @keyframes opening {
    0% {
      overflow: hidden;
      height: 0px;
    }
    100% {
      overflow: initial;
      height: 137px;
    }
  }
`;

export const TicketForm = styled.div`
  height: 137px;
  & > form {
    height: 137px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  position: relative;
`;

export const TicketIcon = styled.img`
  cursor: pointer;
  margin-left: 12px;
  margin-right: 12px;
  /* &:hover { */

  & svg path {
    fill: ${({ theme }) => theme.text.primary};
  }
  /* } */
`;

export const TicketButtons = styled.div`
  display: flex;
  & > div {
    margin-left: 12px;
    margin-right: 12px;
    cursor: pointer;
  }
  & .calendar-fields{
    /* background-color: black; */
  }
`;
export const SubmitTicket = styled.button`
  margin-right: 12px;
  width: 53px;
  height: 33px;
  background-color: ${colors.accentColor};
  border: none;
  color: white;
  text-transform: uppercase;
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.menu.easyAccent};
    transition-duration: 0.3s;
  }
  &:active {
    transition-duration: 0.3s;
    color: ${colors.accentColor};
    background-color: #fbebff;
  }
`;


