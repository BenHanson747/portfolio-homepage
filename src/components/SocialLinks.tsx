import { FiLinkedin, FiGithub } from "react-icons/fi";
import React from "react";
import { linkedinURL, gitHubURL } from "./data/NavListData";
import SocialMediaLink from "./SocialMediaLink";

function SocialLinks() {
  return (
    <div className="home__social">
      <SocialMediaLink link={linkedinURL} icon={<FiLinkedin/>}/>
      <SocialMediaLink link={gitHubURL} icon={<FiGithub />}/>
    </div>
  );
}

export default SocialLinks;
