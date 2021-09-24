import styled from "styled-components";

export const StyledField = styled.div`
  width: 280px;
  display: flex;

  align-items: center;
  input {
    color: ${({ theme }) => theme.text.primary};
    font-size: 20px;
  }
  & .MuiInput-underline::before {
    border-bottom: none;
  }
  & .MuiInput-underline:after {
    border-bottom: none;
  }
  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }
  @media (max-width: 640px) {
    width: 168px;
    height: 72px;
    .MuiInput-root {
      font-size: 14px;
    }
  }
`;
