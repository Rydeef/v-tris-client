import styled from "styled-components";

export const LoginBox = styled.div`
  width: 544px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: block;
  position: relative;
  @media (max-width: 640px) {
    width: 256px;
  }
`;
export const LoginTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 64px;
  font-weight: 600;
  font-size: 32px;
  @media (max-width: 640px) {
    padding-bottom: 54px;
  };
`;
export const FieldBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 40px;
  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;
export const IconBox = styled.div`
  width: 72px;
  height: 72px;
  background-color: #fbebff;
  display: flex;
  justify-content: center;
  align-items: center;
  & path {
    color: #7d069b;
  }
  @media (max-width: 640px) {
    width: 56px;
    height: 56px;
  }
`;

export const FormButtons = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    &:not(:last-child) {
      margin-top: 4px;
      margin-bottom: 4px;
    }
    &:not(:first-child) {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;
