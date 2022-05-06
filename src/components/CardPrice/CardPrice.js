import React from "react";
import {
  DivCardPricing,
  DivDollar,
  IconCheck,
  DivListServices,
  ButtonPrice
} from "./styled";

const CardPrice = ({ name, slogan, price, services ,center }) => {
  return (
    <DivCardPricing center={center}>
      <h3>{name}</h3>
      <h5>{slogan}</h5>
      <DivDollar>
        <h2>{price}</h2>
        <div>
          <h3>$</h3>
          <h5>Per Month</h5>
        </div>
      </DivDollar>
      <DivListServices center={center}>
        {services.map((k, input) => (
          <h6 key={input}>
            <IconCheck />
            {k}
          </h6>
        ))}
      </DivListServices>
      <ButtonPrice>Try to Free</ButtonPrice>
    </DivCardPricing>
  );
};

export default CardPrice;
