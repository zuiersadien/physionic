import styled from "styled-components";
import BackgraundImg from "../../img/background.png";
import { AiOutlineArrowRight, AiOutlineMenu } from "react-icons/ai";

import { Formik } from "formik";
export const Hav = styled.div`
import { Formik } from "formik";

  width: 100%;
  height: 100%;
  background-image: url(${BackgraundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Container = styled.div`
  width: 80.85%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 25px;
  justify-content: space-between;
`;
export const Forms = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;

  & > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #252b42;
  }
  & > form {
  }
  & > form > div {
    display: flex;
    flex-direction: column;
  }
  & > form > div > label {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #252b42;
    margin: 5px 0;
  }
  & > form > div > input {
    height: 5rem;
    margin: 5px 0;
    color: #252b42;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    background: #f9f9f9;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 28px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  & > form > button {
    margin-top: 3.5rem;
    width: 100%;
    padding: 1.5rem 5.5rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 22px;
    border-radius: 5px;
    border: none;
    background: #23a6f0;
    color: #ffffff;
  }
`;
export const Slogan = styled.div`
  color: #ffffff;
  height: 100%;
  display: flex;
  width: 40%;
  min-width: 200px;
  justify-content: center;
  flex-direction: column;
  & div {
    width: 70%;
  }
  & > div > h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 5.8rem;
    line-height: 80px;
  }
  & > div > h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 30px;
  }
`;
export const ButtonCenter = styled.div`
  & > button {
    color: #ffff;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    text-decoration: none;

    border: 0.1rem solid rgba(255, 255, 255, 1);
    padding: 15px 36px;
    margin: 5px;
    border-radius: 3.7rem;
    background-color: transparent;
  }
  & > :first-child {
    background-color: rgba(35, 166, 240, 1);
    border: none;
  }
`;
// NAVBAR

export const NavBar = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  position: relative;


  & > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 32px;
  }
`;

export const ButtonNAV = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
 

  & > div {
    display: flex;
  }
  & > div > div {
    display: flex;
    text-decoration: none;
    list-style: none;
  }
  & > div > div > li {
    margin-left: 15px;
    display: flex;
    align-items: center;
  }
  & > div > div > li > a {
    color: #ffffff;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 24px;
    @media (max-width: 750px) {
      color: rgba(115, 115, 115, 1);
      padding: 2rem;
      transition: 0.5 all ease;
    }
  }
  @media (max-width: 750px) {
    & > div > div {
      background-color: rgba(255, 255, 255, 0.9);
      position: absolute;
      top: 70px;
      left: ${({open})=>open?"0":"-150%"};
      list-style: none;
      width: 100%;
      height: 90vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.5 all ease;
    }
  }
`;
export const DivButtoNAV = styled.div`
  display: flex;
  align-items: center;

  }
  & > button {
    background-color: rgba(35, 166, 240, 1);
    padding: 15px 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    border-radius: 0.5rem;
    color: #ffffff;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width:750px){
   display: none;
   &>button{
     display: none;
   }
  }
`;
export const Arroy = styled(AiOutlineArrowRight)`
  margin-left: 15px;
  font-size: 1.4rem;
`;
export const MenuMobile = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    height: 100%;
    right: 0;

    cursor: pointer;
    & > svg {
      color: white;
      font-size: 3rem;
    }
  }
`;
