import styled from 'styled-components';
import {BsFacebook}from "react-icons/bs"
import {AiOutlineInstagram ,AiOutlineTwitter}from "react-icons/ai"

export const FlexFooter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const Touch = styled.div`
 display: flex;
  flex-direction: column;
  margin: 1rem;
    & > h3 {
    margin: 2rem 0;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #252b42;
  }
  & > P {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    margin: 0.5rem 0;
    line-height: 24px;
    color: #737373;
    text-decoration: none;
  }
`;
export const Face = styled(BsFacebook)`
  font-size: 3rem;
  color: #23A6F0;
`;
export const Twit = styled(AiOutlineTwitter)`
  font-size: 3rem;
  color: #23A6F0;

`;
export const Ista = styled(AiOutlineInstagram)`
  font-size:3rem;
  color: #23A6F0;

`;
export const DivIcon = styled.div`
margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
`;