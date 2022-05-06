import styled from "styled-components";

export const DivCardFotter = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2rem 0;
  & > h3 {
    margin: 2rem 0;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #252b42;
  }
  & > a {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    margin: 0.5rem 0;
    line-height: 24px;
    color: #737373;
    text-decoration: none;
  }
`;
