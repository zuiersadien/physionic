import React from "react";
import TitleLead from "../TitleLead/TitleLead";
import CarOpinion from "../ CarOpinion/CarOpinion";
import { FlexCardOpion } from "./styles";
const Opinion = () => {
  return (
    <div>
      <TitleLead
        title="Leading Medicine"
        subtitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
      />
      <FlexCardOpion>
        <CarOpinion
          starts={1}
          opi="Slate helps you see how many more days you need to work to reach your financial goal."
          img="https://media.revistagq.com/photos/5ca5fd6e3492a940f5bf1bf0/master/pass/doctor_mike_gq_5080.jpg"
        />
         <CarOpinion
          starts={4}
          opi="Slate helps you see how many more days you need to work to reach your financial goal."
          img="https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/9rGg7Q0FAP8LdGZyM2kIcd1LXqWBVKFdvfgdCTGnYQU.jpeg"
        />
         <CarOpinion
          starts={5}
          opi="Slate helps you see how many more days you need to work to reach your financial goal."
          img="http://www.clinicarementeria.es/wp-content/uploads/2018/04/doctor-javier-hurtado.jpg"
        />
          <CarOpinion
          starts={3}
          opi="Slate helps you see how many more days you need to work to reach your financial goal."
          img="https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/9rGg7Q0FAP8LdGZyM2kIcd1LXqWBVKFdvfgdCTGnYQU.jpeg"
        />
         <CarOpinion
          starts={1}
          opi="Slate helps you see how many more days you need to work to reach your financial goal."
          img="https://media.revistagq.com/photos/5ca5fd6e3492a940f5bf1bf0/master/pass/doctor_mike_gq_5080.jpg"
        />
           <CarOpinion
          starts={2}
          opi="Slate helps you see how many more days you need to work to reach your financial goal."
          img="https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/9rGg7Q0FAP8LdGZyM2kIcd1LXqWBVKFdvfgdCTGnYQU.jpeg"
        />

      </FlexCardOpion>
    </div>
  );
};

export default Opinion;
