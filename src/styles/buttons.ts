import styled from "styled-components";

interface FilterButtonProps {
  opened?: boolean;
}

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

export const FilterButton = styled.button<FilterButtonProps>`
  width: ${({ opened }) => (opened ? "40px" : "98px")};
  height: 40px;
  background-color: #7d069b;
  border: none;
  cursor: pointer;
  font-weight: 400;
  color: #ffffff;
  font-size: 20px;
  transition-duration: 0.3s;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  @keyframes turningRight {
    0%{
      transform: rotate(360deg) translateY(0px) translateX(0px);
    }
    100% {
      transform: rotate(44deg) translateY(1px) translateX(-7px);
    }
  }
  @keyframes turningLeft {
    0%{
      transform: rotate(360deg) translateY(0px) translateX(0px);
    }
    100% {
      transform: rotate(-46deg) translateY(-4px) translateX(-6px);
    }
  }
  ${({ opened }) =>
    opened &&
    `
    &:before{
      content: "";
      width: 36px;
      height: 3px;
      background-color: white;
      position: absolute;
      top: 16px;
      animation: turningLeft  0.5s forwards;
    }
    &:after{
      content: "";
      width: 36px;
      height: 3px;
      background-color: white;
      position: absolute;
      bottom: 15px;
      
      animation: turningRight 0.5s forwards;
    }
  `};

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
