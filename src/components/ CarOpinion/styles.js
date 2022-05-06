import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
export const DivCard = styled.div`
  padding: 30px 35px;
  width: 20%;
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 5px;
  margin: 1rem;
  min-width: 200px;
`;
export const ImgDiv = styled.div`
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
export const TextDiv = styled.div`
  color: #737373;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;
export const StarsDiv = styled.div``;
export const IconStar = styled(AiOutlineStar)`
  font-size: 2.4rem;
  color: rgba(243, 205, 3, 1);
`;
export const IconStarPadding = styled(AiFillStar)`
  font-size: 2.4rem;
  color: rgba(243, 205, 3, 1);
`;
export const DivPadding = styled.div`
  position: absolute;
`;
