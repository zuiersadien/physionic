import React from "react";
import TitleLead from "../TitleLead/TitleLead";
import { FlexCardPrice } from "./styled";
import CardPrice from "../CardPrice/CardPrice";
const Price = () => {
  return (
    <div>
      <TitleLead
        title="pricing"
        subtitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
      />
      <FlexCardPrice>
        <CardPrice
          name="Free"
          slogan="Organize across all apps by hand"
          price="0"
          services={[
            "Unlimited product updates",
            "Unlimited product updates",
            "Unlimited product updates",
            "1GB  Cloud storage",
            "Email and community support"
          ]}
        
        />
         <CardPrice
          name="Free"
          slogan="Organize across all apps by hand"
          price="0"
          services={[
            "Unlimited product updates",
            "Unlimited product updates",
            "Unlimited product updates",
            "1GB  Cloud storage",
            "Email and community support"
          ]}
          center={true}
        />
         <CardPrice
          name="Free"
          slogan="Organize across all apps by hand"
          price="0"
          services={[
            "Unlimited product updates",
            "Unlimited product updates",
            "Unlimited product updates",
            "1GB  Cloud storage",
            "Email and community support"
          ]}
        />
      </FlexCardPrice>
    </div>
  );
};

export default Price;
