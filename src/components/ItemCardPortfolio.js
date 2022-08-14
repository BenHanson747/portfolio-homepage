import PortfolioData from "./PortfolioData";

function ItemCardPortfolio() {
  return (
    <>
      {PortfolioData.map((PortfolioData) => {
        const { id, src, alt, linksource, heading, text } = PortfolioData;
        return (
          <div key={id} className="flexbox__item">
            <a href={linksource} target="_blank" rel="noreferrer">
              <img
                className="item__image"
                src={src}
                alt={alt}
                width="350"
                height="200"
                loading="lazy"
              />
            </a>
            <div className="item-text-box">
              <h3>{heading}</h3>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemCardPortfolio;
