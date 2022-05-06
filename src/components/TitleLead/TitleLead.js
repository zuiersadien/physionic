import React from "react";
import { TitleLeading } from "./styles";
const TitleLead = ({title ,subtitle}) => {
  return (
    <TitleLeading>
      <h2>{title}</h2>
      <p>
        {subtitle}
      </p>
    </TitleLeading>
  );
};

export default TitleLead;
