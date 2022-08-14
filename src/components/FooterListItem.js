import NavListData from "./NavListData";

function FooterListItem() {
  return (
    <ul className="footer__links grid">
      {NavListData.map((FooterListItem) => {
        const { id, itemName, navLink } = FooterListItem;
        return (
          <li key={id}>
            <a href={navLink} className="footer__links">
              {itemName}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterListItem;
