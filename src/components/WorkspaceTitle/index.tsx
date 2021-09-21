import React from "react";
import { TitleWrapper, Title, FilterIco } from "./styles";
import { FilterButton } from "../../styles/buttons";
import filterImg from "../../assets/svg/filter.svg";

export const WorkspaceTitle: React.FC = () => {
  return (
    <TitleWrapper>
      <Title>V-tris team</Title>
      <FilterButton>
        Filter <FilterIco src={filterImg} alt="" />
      </FilterButton>
    </TitleWrapper>
  );
};

export default WorkspaceTitle;
