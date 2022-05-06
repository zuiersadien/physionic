import React from "react";
import { Face, FlexFooter ,Touch, Twit,Ista,DivIcon} from "./styles";
import CardFotter from "../components/CardFotter/CardFotter";
const Footer = () => {
  return (
    <FlexFooter>
      <Touch>
        <h3>Get In Touch</h3>
        <p>the quick fox jumps over the lazy dog</p>
        <DivIcon>
            <Face/>
            <Twit/>
            <Ista/>
        </DivIcon>
      </Touch>
      <CardFotter title="Company info" about={["About Us","Carrier","We are hiring","Blog"]}/>
      <CardFotter title="Features" about={["Business Marketing","User Analytic","Live Chat","Unlimited Support"]}/>
      <CardFotter title="Resources " about={["IOS & Android","Watch a Demo","Customers","API"]}/>

    </FlexFooter>
  );
};

export default Footer;
