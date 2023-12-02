import React from "react";
import { SocialMediaData } from "./data/SocialMediaData";

type SocialMediaLinkProps = {
  link: string;
  icon: JSX.Element;
  className: string;
};

type SocialLinksProps = {
  ContainerClassName: string;
  AnchorLinkClassName: string;
};

const SocialMediaLink = ({ link, icon, className }: SocialMediaLinkProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {icon}
    </a>
  );
};

const SocialLinks = ({
  ContainerClassName,
  AnchorLinkClassName,
}: SocialLinksProps) => {
  return (
    <div className={ContainerClassName}>
      {SocialMediaData.map(({ id, url, icon }) => (
        <SocialMediaLink
          key={id}
          link={url}
          icon={icon}
          className={AnchorLinkClassName}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
