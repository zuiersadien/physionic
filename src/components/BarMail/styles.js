import styled from "styled-components";

export const DivMail = styled.div`
  background: #252b42;
  margin: 4rem 0;
  padding: 4rem;
  display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;


`;
export const TextDivMail = styled.div`
  width: 50%;
  & > h2 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 57px;
    color: #ffffff;
    margin: 0;
  }
  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 20px;
    color: #ffffff;
  }
`;
export const InputDiv = styled.div`
  display: flex;
  & > input {
    height: 5rem;
    width: 70%;
    min-width: 200px;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid #e6e6e6;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: #737373;
    
  }
  & > button {
    background: #23a6f0;
    border: 1px solid #e6e6e6;
    border-radius: 0px 5px 5px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    color: #ffffff;
    line-height: 28px;
  }
`;
