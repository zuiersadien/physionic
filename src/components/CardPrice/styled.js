import styled, { css } from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

export const IconCheck = styled(BsCheckCircleFill)`
  font-size: 3.2rem;
  color: #2dc071;
  margin-right: 1rem;
`;
export const DivCardPricing = styled.div`
  border: 1px solid #23a6f0;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 1rem;
 
  & > h3 {
    color: #252b42;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 32px;
  }
  & > h5 {
    color: #737373;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 24px;
    width: 70%;
    margin: 0 auto;
  }
  ${(props) =>
    props.center === true &&
    css`
      background: #252b42;
      padding-top: 5rem;
      &>h3{
          color: #ffff ;
      }
      &>h5{
          color: #ffff ;
      }

    `}
`;
export const DivDollar = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: center;
  & > h2 {
    color: #23a6f0;
    font-weight: 700;
    font-size: 4rem;
    line-height: 57px;
    margin-right: 1rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  & > div > h3 {
    color: #23a6f0;
    font-weight: 700;
    font-size: 1.6rem;
    margin: 0;
    line-height: 24px;
    text-align: start;
    width: 100%;
  }
  & > div > h5 {
    color: #8ec2f2;
    margin: 0;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 24px;
  }
`;
export const DivListServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;

  & h6 {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    text-align: start;
    margin: 0 auto;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 24px;
    color: #252b42;
  }
  ${(props) =>
    props.center === true &&
    css`
      &>h6{
          color: #ffff ;
      }
    `}
`;
export const ButtonPrice = styled.button`
  background-color: #23a6f0;
  width: 80%;
  margin: 0 auto;
  min-height: 5.2rem;
  border-radius: 5px;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 22px;
  border: 1px #ffff solid;
  margin: 3rem 0;
`;
