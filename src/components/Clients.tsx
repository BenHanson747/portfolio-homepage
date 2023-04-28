import ItemCardClients from "./ItemCardClients";
import React from "react";
import { SectionContainer } from "./styles/SectionContainer";
import { SectionTitle } from "./styles/SectionTitle";
import { SectionSubTitle } from "./styles/SectionSubtitle";

function Clients() {
  return (
  <SectionContainer id="clients">
      <SectionTitle>Clients</SectionTitle>
      <SectionSubTitle>My experience</SectionSubTitle>
      <div className="flexbox-container">
        <ItemCardClients />
      </div>
   </SectionContainer>
  );
}

export default Clients;
