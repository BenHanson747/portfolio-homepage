import FooterListItem from "./FooterListItem";
import React from "react";
import SocialMediaLink from "./SocialMediaLink";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { linkedinURL, gitHubURL } from "./data/NavListData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Ben Hanson.</h1>
            <span className="footer__subtitle">React Developer</span>
          </div>
          <FooterListItem />
          <div className="footer__socials">
            <SocialMediaLink link={linkedinURL} icon={<FiLinkedin />} className={"footer__links"}/>
            <SocialMediaLink link={gitHubURL} icon={<FiGithub />} className={"footer__links"}/> 
          </div>
        </div>
        <p className="footer__copy">&#169; Ben Hanson. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
