import styled from "styled-components";
import darkThemeIcon from "../../assets/svg/darkTheme.svg";
import lightThemeIcon from "../../assets/svg/lightTheme.svg";

interface MenuProps {
  opened?: boolean;
}
interface MenuLinkProps {
  isActive?: boolean;
}

export const MenuContainer = styled.div<MenuProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  top: -10000px;
  background-color: RGB(0, 0, 0, 0);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-property: background-color;
  ${({ opened }) =>
    opened &&
    `
        top: 10vh;
        background-color: RGB(0, 0, 0, 0.3);
        transition-duration: 0.3s;

    `}
`;
export const MenuBlock = styled.div<MenuProps>`
  width: 0px;
  height: 90vh;
  background-color: ${({ theme }) => theme.menu.primary};
  transition-duration: 1s;
  /* transition-timing-function: ease-in-out; */
  transition-property: width;
  transition: backround-color, 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  ${({ opened }) =>
    opened &&
    `

    width: 440px;
    transition-duration: 0.3s;

    `}
`;

export const MenuFooter = styled.div`
  width: 440px;
  height: 70px;
  background-color: ${({ theme }) => theme.menu.secondary};
  transition-duration: 0.3s;
`;
export const MenuContent = styled.div`
  padding-top: 72px;
  width: 440px;
`;

export const MenuLink = styled.div<MenuLinkProps>`
  width: 100%;
  height: 40px;
  transition-duration: 0.3s;
  ${({ isActive, theme }) =>
    isActive &&
    `
    background-color: ${theme.menu.easyAccent};
    & span, svg path{
      color: ${theme.text.secondary} !important;
    }
    &::before {
      content: "";
      width: 4px;
      height: 40px;
      background-color: ${theme.menu.accent};
      position: absolute;
      left: 0;
    }
  `}
  &:hover {
    background-color: ${({ theme }) => theme.menu.secondary};
    transition-duration: 0.3s;
  }
  & > a > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & svg path {
    color: #a0a0a0;
  }
`;

export const MenuLinkSpan = styled.span`
  padding-left: 12px;
  font-weight: 400px;
  font-size: 20px;
  line-height: 26px;
`;
export const WorkspaceTitle = styled.span`
  font-weight: 400px;
  font-size: 20px;
  line-height: 26px;
  text-transform: uppercase;
  &:last-child {
    color: #a0a0a0;
  }
`;
export const WorkspaceLink = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const MenuTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const SwitchWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SwitchTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
export const SwitchDot = styled.label`
  width: 76px;
  height: 38px;
  display: block;
  background-color: ${({ theme }) => theme.menu.accent};
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  background-image: url(${darkThemeIcon});
  transition-duration: 0.5s;
  background-repeat: no-repeat;
  background-position: center right 10px;

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    background-color: #e8f5f7;
    position: absolute;
    border-radius: 70px;
    top: 4px;
    left: 5px;
    transition-duration: 0.5s;
    background-image: url(${lightThemeIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:active:after {
    width: 30px;
  }
`;
export const SwitchInput = styled.input`
  &[type="checkbox"] {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  &:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
    background-image: url(${darkThemeIcon});
  }
  &:checked + label {
    background-position: center left 10px;
    background-image: url(${lightThemeIcon});
  }
`;

export const SwitchBox = styled.div`
  display: flex;
  align-items: center;
`;
