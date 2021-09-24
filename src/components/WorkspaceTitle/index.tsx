import React, { useEffect, useState } from "react";
import {
  TitleWrapper,
  Title,
  FilterIco,
  FilterContainer,
  Filter,
  FilterCalendar,
} from "./styles";
import { FilterButton } from "../../styles/buttons";
import filterImg from "../../assets/svg/filter.svg";
import sortImg from "../../assets/svg/sort.svg";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "react-calendar/dist/Calendar.css";

export const WorkspaceTitle: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [openedCalendar, setOpenedCalendar] = useState(false);

  const handleFilter = () => {
    setOpened(!opened);
  };
  const handleCalendar = () => {
    setOpenedCalendar(!openedCalendar);
  };
  const calendarOnChange = (values: any) => {
    setCalendarValue(values);
    setOpenedCalendar(!openedCalendar);
  };
  useEffect(() => {
    console.log(calendarValue);
  }, [calendarValue]);
  return (
    <TitleWrapper>
      <Title>V-tris team</Title>
      <FilterContainer>
        <Filter opened={opened}>
          {/* {openedCalendar && ( */}
          <DatePicker
            selected={calendarValue}
            onChange={calendarOnChange}
            customInput={<DateRangeOutlinedIcon />}
            // onClick={handleCalendar}
            withPortal
          />
          {/* <FilterCalendar onChange={calendarOnChange} value={calendarValue} /> */}
          {/* )} */}

          <FilterIco src={sortImg} alt="" />
        </Filter>

        <FilterButton onClick={handleFilter} opened={opened}>
          {!opened && "Filter"}{" "}
          {!opened && <FilterIco src={filterImg} alt="" />}
        </FilterButton>
      </FilterContainer>
    </TitleWrapper>
  );
};

export default WorkspaceTitle;
