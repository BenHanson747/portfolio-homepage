import NavListData from "./data/NavListData";
import React from "react";

function NavListItem() {
  return (
    <ul className="nav__list grid">
      {NavListData.map(({ id, itemName, icon: Icon, navLink }) => {
        return (
          <li key={id} className="nav__item">
            <a href={navLink} className="nav__link">
              <div className="nav__icon"><Icon /></div>
              {itemName}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavListItem;
