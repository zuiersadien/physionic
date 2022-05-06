import styled from "styled-components";
import { BsPeople } from "react-icons/bs";

export const IconPeople = styled(BsPeople)`
  font-size: 2.4rem;
  color: #23a6f0;
  background-color: #ffff;
  border-radius: 200px;
  padding: 1.5rem;
  margin-right: 1rem;
`;
export const CardDiv = styled.div`

  margin-bottom: 2rem;
  width: 25%;
  min-width: 300px;
  border: 1px solid #a9d6ff;
  border-radius: 0 0 11px 11px;
  
`;
export const TitleDiv = styled.div`
  height: 13.2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  background: #8ec2f2;
  border-radius: 11px 11px 0 0;
  & > h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;

export const UlDiv = styled.ul`
  padding: 4rem;
  list-style: none;

  & > li {
    text-decoration: none;
    color: rgba(115, 115, 115, 1);
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 24px;
  }
  & > p > a {
    color: #23a6f0;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-top: 5px;
  }
`;
