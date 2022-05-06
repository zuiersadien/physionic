import React from "react";
import {DivCardFotter} from "./styles"
const CardFotter = ({ title, about }) => {
  return (
    <DivCardFotter>
      <h3>{title}</h3>
      {
          about.map((k)=>(
              <a href="/">{k}</a>
          ))
      }
    </DivCardFotter>
  );
};

export default CardFotter;
