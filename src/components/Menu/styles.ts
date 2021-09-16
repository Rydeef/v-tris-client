import styled from "styled-components";
interface MenuProps {
  opened?: boolean;
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
        top: 80px;
        background-color: RGB(0, 0, 0, 0.3);
        transition-duration: 0.3s;

    `}

`;
export const MenuBlock = styled.div<MenuProps>`
  width: 0px;
  height: 100%;
  background-color: #ffffff;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  ${({ opened }) =>
    opened &&
    `
    width: 440px;
    transition-duration: 0.3s;

    `}
`;
