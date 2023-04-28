import ItemCardPortfolio from "./ItemCardPortfolio";
import React from "react";
import { SectionContainer } from "./styles/SectionContainer";
import { SectionTitle } from "./styles/SectionTitle";
import { SectionSubTitle } from "./styles/SectionSubtitle";

function Portfolio() {
  return (
   <SectionContainer id="portfolio">
     <SectionTitle>Portfolio</SectionTitle>
      <SectionSubTitle>My recent work</SectionSubTitle>
      <div className="flexbox-container">
        <ItemCardPortfolio />
      </div>
    </SectionContainer>
  );
}

export default Portfolio;
