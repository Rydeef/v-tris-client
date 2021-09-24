import styled from "styled-components";
import { colors } from "../../theme/colors";

export const PopoverBlock = styled.div`
  width: 154px;
  background-color: ${({ theme }) => theme.workspace.primary};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0;
`;
export const PopoverItem = styled.div`
  height: 42px;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  transition-duration: 0.3s;
  user-select: none;
  &:hover {
    background-color: ${colors.accentColor};
    transition-duration: 0.3s;
    color: white;
  }
  &:active {
    background-color: ${({ theme }) => theme.menu.easyAccent};
    transition-duration: 0.3s;
    color: white;
  }
  & > svg {
    margin-right: 8px;
  }
`;
