import styled from "styled-components";

export const TitleLeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin:10rem 5rem;
  & > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 57px;
    color: #252b42;
  }
  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #737373;
  }
`;