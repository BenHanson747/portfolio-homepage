import { FiLinkedin, FiGithub } from "react-icons/fi";
import React from "react";
import SocialMediaLink from "./SocialMediaLink";

function SocialLinks() {
  return (
    <div className="home__social">
      <SocialMediaLink link={"https://www.linkedin.com/in/ben-hanson-87242937/"} icon={<FiLinkedin />}/>
      <SocialMediaLink link={"https://github.com/BenHanson747"} icon={<FiGithub />}/>
    </div>
  );
}

export default SocialLinks;
