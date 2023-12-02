import FooterListItem from "./FooterListItem";
import React from "react";
import SocialLinks from "./SocialLinks";

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
          <SocialLinks
            ContainerClassName="footer__socials"
            AnchorLinkClassName="social-icon-footer"
          />
        </div>
        <p className="footer__copy">&#169; Ben Hanson. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
