import SocialLinks from "./SocialLinks";
import HeroImage from "./HeroImage";
import MainText from "./MainText";
import { SectionContainer } from "./styles/SectionContainer";
import React from "react";

function Home() {
  return (
    <main className="main">
      <SectionContainer id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <SocialLinks />
            <HeroImage />
            <MainText />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}

export default Home;
