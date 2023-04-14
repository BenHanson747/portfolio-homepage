import PortfolioData from "./data/PortfolioData";
import Image from "./Image";
import React from "react";

function ItemCardPortfolio() {
  return (
    <>
      {PortfolioData.map(({ id, src, alt, linksource, heading, text }) => {
        return (
          <div key={id} className="flexbox__item">
            <a href={linksource} target="_blank" rel="noreferrer">
              <Image src={src} altText={alt} />
            </a>
            <div className="item-text-box">
              <h3>{heading}</h3>
              <p className="padding__bottom">{text}</p>
              <a
                href={linksource}
                className="button button--flex"
                target="_blank"
                rel="noreferrer"
              >
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
