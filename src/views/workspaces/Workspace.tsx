import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import WorkspaceTitle from "../../components/WorkspaceTitle/index";
import WorkspaceColumns from "../../components/WorkspaceColumns/index";
import { ContentContainer } from "../../styles/utils";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Workspace: React.FC = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname.split('/').shift());
  }, [location]);
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
