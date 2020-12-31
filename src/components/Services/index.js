import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesIcon,
  ServicesCard,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={'/images/svg-6.svg'} alt="Reduce expenses" />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We Help Reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'/images/svg-4.svg'} alt="Virtual Maintenance" />
          <ServicesH2>Virtual Maintenance</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'/images/svg-5.svg'} alt="SEOs" />
          <ServicesH2>SEOs</ServicesH2>
          <ServicesP>
            Unlocks a special ability to get more customers by Search Engine
            Optimisation.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
