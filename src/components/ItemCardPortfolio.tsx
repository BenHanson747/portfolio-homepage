import PortfolioData from "./data/PortfolioData";
import Image from "./Image";
import Button from "./Button";
import React from "react";
import styled from "styled-components";

const FlexBoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  &*:first-child {
    align-self: flex-start;
  }

  *:nth-child(2) {
    margin-left: 1rem;

`;


function ItemCardPortfolio() {
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
              <FlexBoxContainer>          
                <Button link={projectLink} text="View Project" />
                <Button link={codeLink} text="View Code" />
              </FlexBoxContainer>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ItemCardPortfolio;
