import React, { useState } from "react";
import {
  BodyHeight,
  LayoutContainer,
  Header,
  BurgerMenu,
  HeaderMenu,
  HeaderContent,
  Avatar,
  HeaderLogo,
  Logo,
  LogoImage,
  LogoTitle,
  BurgerStripe,
  ChildrenContainer,
} from "./styles";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { ContentContainer } from "../../styles/utils";
import logoSvg from "../../assets/svg/logo.svg";
import Menu from "../Menu";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isBurger, setBurger] = useState(false);
  const handleBurger = () => {
    setBurger(!isBurger);
  };
  return (
    <LayoutContainer>
      <BodyHeight />
      <Menu opened={isBurger} />
      <Header>
        <ContentContainer>
          <HeaderContent>
            <HeaderLogo>
              <BurgerMenu onClick={handleBurger}>
                <BurgerStripe opened={isBurger} />
                <BurgerStripe opened={isBurger} />
              </BurgerMenu>
              <Logo>
                <LogoImage src={logoSvg} alt="" />
                <LogoTitle>V-TRIS</LogoTitle>
              </Logo>
            </HeaderLogo>
            <HeaderMenu>
              <SearchOutlinedIcon fontSize="medium" />
              <SettingsOutlinedIcon fontSize="medium" />
              <Avatar />
            </HeaderMenu>
          </HeaderContent>
        </ContentContainer>
      </Header>
      <ContentContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
