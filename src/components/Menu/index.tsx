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
  WorkspaceLink,
  SwitchWrapper,
  SwitchTitle,
  SwitchBox,
  SwitchDot,
} from "./styles";
import { links } from "./fields";
import { SwitchInput } from "./styles";
import { ClickAwayListener } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

interface MenuProps {
  opened: boolean;
  setTheme: Function;
  theme: string;
  setBurger: Function;
}

export const Menu: React.FC<MenuProps> = ({
  opened,
  setBurger,
  setTheme,
  theme,
}) => {
  const workspaces = useSelector(({ user }: any) => user.userInfo.workspaces);

  const history = useHistory();

  const handleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setTheme(e.target.checked ? "dark" : "light");
    window.localStorage.setItem(
      "vTrisTheme",
      e.target.checked ? "dark" : "light"
    );
  };

  const handleOutsideClick = () => {
    setBurger(false);
  };

  return (
    <MenuContainer opened={opened}>
      <ClickAwayListener
        onClickAway={handleOutsideClick}
        mouseEvent="onMouseUp"
        touchEvent="onTouchEnd"
        disableReactTree={true}
      >
        <MenuBlock opened={opened}>
          <MenuContent>
            {links.map((route) => (
              <MenuLink
                key={route.path}
                isActive={route.path === history.location.pathname}
              >
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
              {workspaces.map((workspace: any) => (
                <MenuLink
                  key={workspace.id}
                  isActive={
                    `/workspace/${workspace.id}` === history.location.pathname
                  }
                >
                  <StyledLink
                    onClick={handleOutsideClick}
                    to={`/workspace/${workspace.id}`}
                    strict
                  >
                    <ContentContainer>
                      <WorkspaceLink>
                        <WorkspaceTitle>{workspace.name}</WorkspaceTitle>
                        <WorkspaceTitle>
                          {workspace.data.length
                            ? workspace.data.reduce(
                                (acc: Number, curr: any) =>
                                  acc + curr.tickets?.length
                              )
                            : 0}
                        </WorkspaceTitle>
                      </WorkspaceLink>
                    </ContentContainer>
                  </StyledLink>
                </MenuLink>
              ))}
            </MenuContent>
          </MenuContent>
          <MenuFooter>
            <ContentContainer>
              <SwitchWrapper>
                <SwitchTitle>Color Theme</SwitchTitle>
                <SwitchBox>
                  <SwitchInput
                    type="checkbox"
                    name="switchTheme"
                    id="switchTheme"
                    onChange={handleTheme}
                    checked={theme === "dark" ? true : false}
                  />
                  <SwitchDot htmlFor="switchTheme"></SwitchDot>
                </SwitchBox>
              </SwitchWrapper>
            </ContentContainer>
          </MenuFooter>
        </MenuBlock>
      </ClickAwayListener>
    </MenuContainer>
  );
};

export default Menu;
