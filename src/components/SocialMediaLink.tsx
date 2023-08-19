import React, { ReactNode } from "react";

type SocialMediaLinkProps = {
    link: string;
    icon: ReactNode;
    className?: string;
};

const SocialMediaLink = ({ link, icon, className }: SocialMediaLinkProps) => {
 return (
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={className}
    >
        {icon}    
    </a>
  ) 
};

export default SocialMediaLink;