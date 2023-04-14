import navListData from "./data/NavListData";
import React from "react";

const FooterListItem = () => (
  <ul className="footer__links grid">
    {navListData.map(({ id, itemName, navLink }) => (
      <li key={id}>
        <a href={navLink} className="footer__links">
          {itemName}
        </a>
      </li>
    ))}
  </ul>
);

export default FooterListItem;
