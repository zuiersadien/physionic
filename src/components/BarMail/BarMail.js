import React from "react";
import { DivMail, TextDivMail,InputDiv } from "./styles";
export const BarMail = () => {
  return (
    <DivMail>
 
        <TextDivMail>
          <h2>Get In Touch</h2>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behaviour during the first quarter of the 20th
          </p>
        </TextDivMail>
        <InputDiv>
          <input type="text"  placeholder="example@gmail.com "/>
          <button>Subscribe</button>
        </InputDiv>

    </DivMail>
  );
};
