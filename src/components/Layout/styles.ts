import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../theme/colors";

interface StripesProps {
  opened: boolean;
}

export const BodyHeight = createGlobalStyle`
    html, body{
        height: 100vh;
        max-height: 100vh;
        overflow: hidden;
        background-color: ${({ theme }) => theme.body.primary}
    }
    #root{
        height: 100%;
        width: 100%;
       
    }
   
`;

export const LayoutContainer = styled.div`
  width: 100%;
`;
export const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${colors.headerColor};
`;
export const BurgerMenu = styled.div`
  background-color: ${colors.accentColor};
  height: 40px;
  width: 40px;
  margin-right: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const BurgerStripe = styled.span<StripesProps>`
  height: 2px;
  width: 30px;
  background-color: #fff;
  margin-top: 2px;
  margin-bottom: 2px;
  transition-duration: 0.3s;
  &:last-child {
    ${(props) =>
      props.opened &&
      `transform: rotate(0.62turn) translate(2.5px, 2px);
      margin-left: 2px;
      height: 3px;
      transition-duration: .3s;
  `}
  }
  &:first-child {
    ${(props) =>
      props.opened &&
      `transform: rotate(0.37turn) translate(3px, -2px);
      margin-left: 2px;
      height: 3px;
        transition-duration: .3s;
        `}
  }
`;
export const HeaderMenu = styled.div`
  & > * {
    margin-left: 32px;
  }
`;
export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg path {
    color: white;
  }
`;
export const Avatar = styled.div`
  display: inline-block;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: white;
`;

export const HeaderLogo = styled.div`
  display: flex;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoImage = styled.img``;

export const LogoTitle = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-left: 12px;
`;

export const ChildrenContainer = styled.div`
  max-height: 85vh;
  /* overflow-y: auto; */
`;
