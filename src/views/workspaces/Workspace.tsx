import React from "react";
import Layout from "../../components/Layout";
import WorkspaceTitle from "../../components/WorkspaceTitle/index";
import WorkspaceColumns from "../../components/WorkspaceColumns/index";

export const Workspace: React.FC = () => {
  return (
    <Layout>
      <>
        <WorkspaceTitle />
        <WorkspaceColumns />
      </>
    </Layout>
  );
};

export default Workspace;
