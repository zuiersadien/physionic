import React, { useState, useEffect } from "react";
import {
  DivCard,
  StarsDiv,
  TextDiv,
  ImgDiv,
  IconStar,
  IconStarPadding,
  DivPadding,
} from "./styles";
const CarOpinion = ({ starts, opi, img }) => {


  return (
    <DivCard>
      <StarsDiv>
        <DivPadding>
          {[...Array(starts)].map((star) => {
            return <IconStarPadding />;
          })}
        </DivPadding>
        <div>
          {[...Array(5)].map((star) => {
            return <IconStar />;
          })}
        </div>
      </StarsDiv>
      <TextDiv>{opi}</TextDiv>
      <ImgDiv>
        <img src={img} alt="" />
      </ImgDiv>
    </DivCard>
  );
};

export default CarOpinion;
