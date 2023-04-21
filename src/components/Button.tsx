import React from "react";
import styled from "styled-components";

const StyledPrimaryButton = styled.a`
    cursor: pointer;
    border: none;
    background-color: var(--first-color);   
    display: inline-block;
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);   
  
    @media (min-width: 768px) {    
    .button--flex {
        display: inline-flex;
      }
    };

    &:hover {
        background-color: var(--first-color-alt);
        box-shadow: 0px 0.5rem 1.5rem rgba(0, 0, 0, 0.5);
    }
`;

type ButtonProps = {
    link: string;
    text: string;
};

const PrimaryButton = ({ link, text }: ButtonProps) => {
 return (
    <StyledPrimaryButton
        href={link}
        target="_blank"
        rel="noreferrer"
    >
        {text}
    </StyledPrimaryButton>
  ) 
};

export default PrimaryButton;