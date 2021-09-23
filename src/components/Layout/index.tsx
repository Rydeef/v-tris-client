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
import { ThemeProvider } from "styled-components";
import { themes } from "../../theme/themes";

interface LayoutProps {
  children: JSX.Element;
}

type ThemeType = "light" | "dark";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isBurger, setBurger] = useState(false);
  const [theme, setTheme] = useState<ThemeType>(
    window.localStorage.getItem("vTrisTheme") === "dark" ? "dark" : "light"
  );
  const handleBurger = (e: React.MouseEvent<HTMLElement>) => {
    // if (!isBurger) {
    setBurger(!isBurger);
    // }
    console.log(123);
  };
  return (
    <ThemeProvider theme={themes[theme]}>
      <LayoutContainer>
        <BodyHeight />

        <Menu
          opened={isBurger}
          setBurger={setBurger}
          setTheme={setTheme}
          theme={theme}
        />

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

          <ChildrenContainer>{children}</ChildrenContainer>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
