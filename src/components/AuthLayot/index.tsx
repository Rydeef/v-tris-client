import React from "react";
import { AuthDraw, Background, LogoTitle, ChildrenContainer } from "./styles";

interface AuthLayoutProps {
  children: JSX.Element;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <AuthDraw>
      <Background />
      <LogoTitle>V-TRIS</LogoTitle>
      <ChildrenContainer>{children}</ChildrenContainer>
    </AuthDraw>
  );
};

export default AuthLayout;
