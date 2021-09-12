import styled, { createGlobalStyle } from "styled-components";
import authLogo from "../../assets/svg/authLogo.svg";
import figure1 from "../../assets/svg/authFigure1.svg";
import figure2 from "../../assets/svg/authFigure2.svg";

export const Background = createGlobalStyle`
    html, body{
        height: 100%;
    }
    body {
        background: linear-gradient(180deg, #BD00FF 0%, #0B172A 100%);
        background-size: cover;
        &::before {
            z-index: 5;
            content: "";
            height: 100vh;
            width: 100%;
            position: absolute;
            top: 0;
            background-image: url(${figure2});
            background-size: 55%;
            background-repeat: no-repeat;
            background-position-x: left;
        }
        
    }
    #root{
        height: 100%;
        width: 100%;
    }
`;
export const AuthDraw = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    z-index: 7;
    content: "";
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    background-image: url(${authLogo});
    background-size: 55%;
    background-repeat: no-repeat;
    background-position-x: left;
  }
  &::after {
    z-index: 6;
    content: "";
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    background-image: url(${figure1});
    background-size: 65%;
    background-repeat: no-repeat;
    background-position-x: left;
  }
`;
export const LogoTitle = styled.div`
  z-index: 8;
  font-weight: 450;
  font-size: 146px;
  color: #ffffff;
  user-select: none;
`;

export const ChildrenContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: appearance 2s ease-in;
  @keyframes appearance {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
