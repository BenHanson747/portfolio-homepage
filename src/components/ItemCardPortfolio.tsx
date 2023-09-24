import PortfolioData from "./data/PortfolioData";
import Image from "./Image";
import Button from "./Button";
import React from "react";


const ItemCardPortfolio = () => {
  return (
    <>
      {PortfolioData.map(({ id, src, alt, projectLink, codeLink, heading, text }) => {
        return (
          <div key={id} className="flexbox__item">
            <a href={projectLink} target="_blank" rel="noreferrer">
              <Image src={src} altText={alt} />
            </a>
            <div className="item-text-box">
              <h3>{heading}</h3>
              <p className="padding__bottom">{text}</p>
              <div className="flexBoxContainer">          
                <Button link={projectLink} text="View Project" />
                <Button link={codeLink} text="View Code" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemCardPortfolio;
