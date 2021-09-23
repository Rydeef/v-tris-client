import React from "react";
import Layout from "../../components/Layout";
import WorkspaceTitle from "../../components/WorkspaceTitle/index";
import WorkspaceColumns from "../../components/WorkspaceColumns/index";
import { ContentContainer } from "../../styles/utils";

export const Workspace: React.FC = () => {
  return (
    <Layout>
      <ContentContainer>
        <WorkspaceTitle />
        <WorkspaceColumns />
      </ContentContainer>
    </Layout>
  );
};

export default Workspace;
