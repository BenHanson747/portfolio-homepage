import SocialLinks from "./SocialLinks";
import HeroImage from "./HeroImage";
import MainText from "./MainText";

function Home() {
  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <SocialLinks />
            <HeroImage />
            <MainText />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
