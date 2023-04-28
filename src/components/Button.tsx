import React from "react";
import {StyledPrimaryButton} from "../components/styles/Button";


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