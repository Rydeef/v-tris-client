import React, { useState } from "react";
import { TitleWrapper, Title, FilterIco } from "./styles";
import { FilterButton } from "../../styles/buttons";
import filterImg from "../../assets/svg/filter.svg";

export const WorkspaceTitle: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const handleFilter = () => {
    setOpened(!opened);
  };
  return (
    <TitleWrapper>
      <Title>V-tris team</Title>
      <FilterButton onClick={handleFilter} opened={opened}>
        Filter <FilterIco src={filterImg} alt="" />
      </FilterButton>
    </TitleWrapper>
  );
};

export default WorkspaceTitle;
