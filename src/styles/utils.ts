import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorMessage = styled.span`
  height: 12px;
  display: block;
  color: red;
  font-size: 14px;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: currentColor;
  text-decoration: none;
`;
export const ContentContainer = styled.div`
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  color: ${({theme})=> theme.text.primary};
`