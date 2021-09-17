import React from "react";
import { ContentContainer, StyledLink } from "../../styles/utils";

import {
  MenuContainer,
  MenuBlock,
  MenuFooter,
  MenuContent,
  MenuLink,
  MenuLinkSpan,
  MenuTitle,
  WorkspaceTitle,
  WorkspaceLink
} from "./styles";
import { links } from "./fields";

interface MenuProps {
  opened: boolean;
}

export const Menu: React.FC<MenuProps> = ({ opened }) => {
  return (
    <MenuContainer opened={opened}>
      <MenuBlock opened={opened}>
        <MenuContent>
          {links.map((route) => (
            <MenuLink isActive={route.path === window.location.pathname}>
              <StyledLink to={route.path}>
                <ContentContainer>
                  <route.icon />
                  <MenuLinkSpan>{route.text}</MenuLinkSpan>
                </ContentContainer>
              </StyledLink>
            </MenuLink>
          ))}
          <MenuContent>
            <ContentContainer>
              <MenuTitle>Workspaces</MenuTitle>
            </ContentContainer>

            <MenuLink>
              <StyledLink to="/">
                <ContentContainer>
                  <WorkspaceLink>
                    <WorkspaceTitle>V-Tris Team</WorkspaceTitle>
                    <WorkspaceTitle>32</WorkspaceTitle>
                  </WorkspaceLink>
                </ContentContainer>
              </StyledLink>
            </MenuLink>
          </MenuContent>
        </MenuContent>

        <MenuFooter></MenuFooter>
      </MenuBlock>
    </MenuContainer>
  );
};

export default Menu;
