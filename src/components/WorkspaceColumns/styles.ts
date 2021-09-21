import styled from "styled-components";

type Outline = "todo" | "review" | "complete" | "inprogress";

interface ColumnTitleProps {
  outline: Outline;
}

export const ColumnsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 48px;
`;

export const Column = styled.div`
  width: 400px;
  min-width: 400px;

  scroll-snap-align: center;
  margin-left: 40px;
  margin-right: 40px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
export const ColumnTitle = styled.div<ColumnTitleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  background-color: ${({ theme }) => theme.workspace.primary};
  margin-bottom: 28px;
  border-bottom: 4px solid ${({ theme, outline }) => theme.workspace[outline]};
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  padding-left: 16px;
  padding-right: 16px;
  text-transform: uppercase;
`;
export const ColumnItem = styled.div`
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
  &:before {
    content: "";

    position: absolute;
    top: -8px;
    right: -2px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid red;
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
