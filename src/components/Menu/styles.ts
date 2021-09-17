import styled from "styled-components";
import { colors } from "../../theme/colors";

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
  background-color: #ffffff;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-property: width;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ opened }) =>
    opened &&
    `

    width: 440px;
    transition-duration: 0.3s;

    `}
`;

export const MenuFooter = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${colors.secondColor};
`;
export const MenuContent = styled.div`
  padding-top: 72px;
  width: 100%;
`;

export const MenuLink = styled.div<MenuLinkProps>`
  width: 100%;
  height: 40px;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #FBEBFF;
    & span, svg path{
      color: ${colors.textSecond} !important;
    }
    &::before {
      content: "";
      width: 4px;
      height: 40px;
      background-color: ${colors.accentColor};
      position: absolute;
      left: 0;
    }
  `}
  &:hover {
    background-color: ${colors.secondColor};
  }
  & div {
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
`;
export const WorkspaceLink = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const MenuTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
`;
