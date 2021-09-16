import React from "react";
import { MenuContainer, MenuBlock } from "./styles";

interface MenuProps {
  opened: boolean;
}

export const Menu: React.FC<MenuProps> = ({ opened }) => {
  return <MenuContainer opened={opened}>
    <MenuBlock opened={opened}></MenuBlock>

  </MenuContainer>;
};

export default Menu;
