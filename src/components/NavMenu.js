import NavListItem from "./NavListItem";
import NavTitle from "./NavTitle";
import { BiGridAlt } from "react-icons/bi";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import NavTheme from "./NavTheme";

function NavMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <NavTitle />
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <NavListItem />
          <div className="nav__close" onClick={toggleMenu}>
            <CgClose />
          </div>
        </div>
        <div className="nav__btns">
          <NavTheme />
          <div className="nav__toggle" onClick={toggleMenu}>
            <BiGridAlt />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;
