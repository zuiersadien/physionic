import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md";
export const TextCarFaq = styled.div`


  display: flex;
  flex-direction: column;
  & > h5 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 24px;
    color: #252B42;
    margin: 0;
   
  }
  & > h6 {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 24px;
    color: #737373;
    margin: 0;
  }
`;
export const ArrowFaq = styled(MdOutlineArrowForwardIos)`
  font-size: 2.6rem;
  margin-right: 2rem;
  color: #23a6f0;
`;
export const DivCarFaq = styled.div`
  display: flex;
  padding: 2.5rem;
  margin: 2.5rem;
  min-width: 200px;
  width: 20%;
  background: #fafafa;
`;
