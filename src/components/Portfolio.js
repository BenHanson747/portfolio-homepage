import ItemCardPortfolio from "./ItemCardPortfolio";

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent work</span>
      <div className="flexbox-container">
        <ItemCardPortfolio />
      </div>
    </section>
  );
}

export default Portfolio;
