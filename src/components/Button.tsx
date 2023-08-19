import React from "react";


type ButtonProps = {
    link: string;
    text: string;
};

const PrimaryButton = ({ link, text }: ButtonProps) => {
 return (
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="button button--flex"
    >
        {text}
    </a>
  ) 
};

export default PrimaryButton;