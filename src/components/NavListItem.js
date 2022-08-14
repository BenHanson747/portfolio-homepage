import NavListData from "./NavListData";

function NavListItem() {
  return (
    <ul className="nav__list grid">
      {NavListData.map((NavListItem) => {
        const { id, itemName, icon, navLink } = NavListItem;
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
