import styled from "styled-components";

export const AuthMain = styled.button`
  width: 100%;
  height: 46px;
  background-color: #fbebff;
  border: none;
  cursor: pointer;
  font-weight: 400;
  color: #7d069b;
  font-size: 20px;
  transition-duration: 0.3s;
  &:hover {
    background-color: #7d069b;
    color: #fff;
    transition-duration: 0.3s;
  }
  &:active {
    background-color: #4d0061;
    color: #fff;
    transition-duration: 0.3s;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;
export const AuthSecond = styled.button`
  width: 100%;
  height: 46px;
  background-color: #7d069b;
  border: none;
  cursor: pointer;
  font-weight: 400;
  color: #ffffff;
  font-size: 20px;
  &:hover {
    background-color: #fbebff;
    color: #7d069b;
    transition-duration: 0.3s;
  }
  &:active {
    background-color: #4d0061;
    color: #fff;
    transition-duration: 0.3s;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;
export const ForgotButton = styled.button`
  width: 100%;
  height: 46px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 400;
  color: #a0a0a0;
  font-size: 20px;
  &:hover {
    color: #7d069b;
    transition-duration: 0.3s;
  }
  &:active {
    background-color: #4d0061;
    color: #fff;
    transition-duration: 0.3s;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;
