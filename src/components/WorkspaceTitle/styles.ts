import Calendar from "react-calendar";
import styled from "styled-components";

interface FilterProps {
  opened: boolean;
}

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 64px;
  padding-bottom: 55px;
  position: relative;
`;
export const Title = styled.div`
  font-size: 32px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FilterIco = styled.img``;
export const Filter = styled.div<FilterProps>`
  & > * {
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
  transition-duration: 0.5s;
  overflow: ${({ opened }) => (opened ? "none" : "hidden")};
  width: ${({ opened }) => (opened ? "186px" : "0px")};
  display: flex;
  align-items: center;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg path {
    color: #c4c4c4;
  }
`;
export const FilterCalendar = styled(Calendar)`
  position: absolute;
  top: 96px;
  right: 16px;
  height: 300px;
  width: 260px;
  z-index: 5;
`;
