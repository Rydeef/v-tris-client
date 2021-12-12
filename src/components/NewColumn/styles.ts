import styled from "styled-components";
import { colors } from "../../theme/colors";

export const NewColumnBox = styled.div`
  min-width: 180px;
  height: 137px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%237D069BFF' stroke-width='4' stroke-dasharray='12%2c 10%2c 9%2c 7' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
  animation: opening 0.5s forwards;
  padding: 8px;
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
