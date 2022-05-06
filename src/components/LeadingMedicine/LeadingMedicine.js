import React from "react";

import CardLeading from "../cardLeading/CardLeading";
import { FlexCard, DivLeading } from "./styles";
import TitleLead from "../TitleLead/TitleLead";
export const LeadingMedicine = () => {
  return (
    <DivLeading>
      <TitleLead
        title="Leading Medicine"
        subtitle="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
      />
      <FlexCard>
        <CardLeading
          TitleCardLeading="Emergency Case"
          ulDiv={[
            "The best products start with Figma",
            "Design with real data",
            "Lightning fast prototyping",
            "Fastest way to organize",
            "Work at the speed of thought.",
          ]}
        />
        <CardLeading
          TitleCardLeading="Cancer Care"
          ulDiv={[
            "The best products start with Figma",
            "Design with real data",
            "Lightning fast prototyping",
            "Fastest way to organize",
            "Work at the speed of thought.",
          ]}
        />
        <CardLeading
          TitleCardLeading="Health Queries"
          ulDiv={[
            "The best products start with Figma",
            "Design with real data",
            "Lightning fast prototyping",
            "Fastest way to organize",
            "Work at the speed of thought.",
          ]}
        />
      </FlexCard>
    </DivLeading>
  );
};
