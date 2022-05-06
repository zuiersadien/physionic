import React from "react";
import { IconPeople, CardDiv, TitleDiv, UlDiv } from "./styles";
const CardLeading = ({ TitleCardLeading, ulDiv }) => {
  return (
    <CardDiv>
      <TitleDiv>
        <h5>{TitleCardLeading}</h5>
        <IconPeople></IconPeople>
      </TitleDiv>
      <UlDiv>
        {ulDiv.map((k ,input) => (
          <li key={input}>-{k}</li>
        ))}
        <p>
          <a href="/">Learn More</a>
        </p>
      </UlDiv>
    </CardDiv>
  );
};

export default CardLeading;
