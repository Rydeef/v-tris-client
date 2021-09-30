import styled from "styled-components";
import { colors } from "../../theme/colors";
import ScrollContainer from "react-indiana-drag-scroll";

type priorityType = "high" | "medium" | "low";

interface ColumnTitleProps {
  outline?: string;
}

interface ColumnItemProps {
  priority: priorityType;
}
export const ColumnsWrapper = styled(ScrollContainer)`
  display: flex;

  padding-bottom: 48px;

  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    background-color: #d3d3d3;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.accentColor};
    border-radius: 9em;
  }
  /* @media (max-width: 980px) {
    scroll-snap-type: x mandatory;
  } */
`;

export const Column = styled.div`
  width: 400px;
  min-width: 400px;
  /* max-height: 496px; */
  scroll-snap-align: center;
  margin-left: 32px;
  margin-right: 32px;
  /* overflow-y: auto; */
  /* overflow-x: hidden; */
  padding-left: 8px;
  padding-right: 8px;
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    background-color: #d3d3d3;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.accentColor};
    border-radius: 9em;
  }

  &:first-child {
    margin-left: 0;
    padding-left: 0;
  }
  &:last-child {
    margin-right: 0;
    padding-left: 0;
  }
`;
export const ColumnTitle = styled.div<ColumnTitleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  background-color: ${({ theme }) => theme.workspace.primary};
  margin-bottom: 28px;
  border-bottom: 4px solid
    ${({ outline, theme }) => (outline ? outline : theme.workspace.primary)};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  padding-left: 16px;
  padding-right: 16px;
  text-transform: uppercase;
`;
export const ColumnItem = styled.div<ColumnItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  height: 80px;
  background-color: ${({ theme }) => theme.workspace.primary};
  margin-bottom: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  padding-left: 16px;
  padding-right: 16px;
  user-select: none;
  &:before {
    content: "";

    position: absolute;
    top: -8px;
    right: -2px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid
      ${({ priority }) =>
        priority === "high"
          ? "red"
          : priority === "medium"
          ? "yellow"
          : priority === "low"
          ? "green"
          : "transparent"};
    transform: rotate(315deg);
  }
  &:hover {
    & img {
      transition-duration: 0.3s;
      opacity: 1;
    }
  }
`;
export const NewTask = styled.button`
  color: ${({ theme }) => theme.text.opacity};
  transition-duration: 0.3s;
  opacity: 0.7;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition-duration: 0.3s;
  }
`;

export const ColumnItemTitle = styled.span``;
export const ColumnItemAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
`;

export const ColumnTitleText = styled.span``;
export const ColumnTitleCount = styled.span`
  margin-left: 14px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
`;
export const ColumnTitleEdit = styled.img`
  cursor: pointer;
`;
export const ColumnTitleContent = styled.div``;
export const ColumnItemInfo = styled.div`
  transition-duration: 0.3s;
  display: flex;
  & img {
    margin-right: 12px;
    cursor: pointer;
    opacity: 0;
  }
`;
