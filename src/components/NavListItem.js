import NavListData from "./data/NavListData";

function NavListItem() {
  return (
    <ul className="nav__list grid">
      {NavListData.map(({ id, itemName, icon, navLink }) => {
        return (
          <li key={id} className="nav__item">
            <a href={navLink} className="nav__link">
              <div className="nav__icon">{icon}</div>
              {itemName}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavListItem;
