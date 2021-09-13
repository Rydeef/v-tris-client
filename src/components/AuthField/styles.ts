import styled from "styled-components";

export const StyledField = styled.div`
  width: 408px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .MuiInput-underline::before {
    border-bottom: 3px solid #f1f1f1;
  }
  & .MuiInput-underline:after {
    border-bottom: 2px solid #7d069b;
  }
  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 3px solid #c4c4c4;
  }
  @media (max-width: 640px) {
    width: 168px;
    height: 72px;
    .MuiInput-root{
      font-size: 14px;
    };
  }
`;

export const FieldLabel = styled.label`
  font-size: 400;
  font-size: 24px;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;
