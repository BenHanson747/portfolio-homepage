import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledSocialMediaLink = styled.a`
    font-size: 1.25rem;
    color: var(--first-color);
    padding: 0.3rem;
  
  &:hover {
    color: #fff;
    background-color: var(--first-color-lighter);
    border-radius: 1rem;
    transition: 0.3s;
  }
`;

type SocialMediaLinkProps = {
    link: string;
    icon: ReactNode;
    className?: string;
};

const SocialMediaLink = ({ link, icon, className }: SocialMediaLinkProps) => {
 return (
    <StyledSocialMediaLink
        href={link}
        target="_blank"
        rel="noreferrer"
        className={className}
    >
        {icon}    
    </StyledSocialMediaLink>
  ) 
};

export default SocialMediaLink;