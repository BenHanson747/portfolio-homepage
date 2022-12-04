import PortfolioData from "./PortfolioData";

function ItemCardPortfolio() {
  return (
    <>
      {PortfolioData.map((PortfolioData) => {
        const { id, src, alt, linksource, heading, text } = PortfolioData;
        return (
          <div key={id} className="flexbox__item">
            <a href={linksource} target="_blank" rel="noreferrer">
              <div style={{display: "block", aspectRatio: 7/4}} >
                  <img
                className="item__image"
                src={src}
                alt={alt}
                width="350"
                height="200"
                loading="lazy"
              />
              </div>
            </a>
            <div className="item-text-box">
              <h3>{heading}</h3>
              <p className="padding__bottom">{text}</p>
              <a
                  href={linksource}
                  className="button button--flex"
                  target="_blank"
                  rel="noreferrer">
                      View Project
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemCardPortfolio;
