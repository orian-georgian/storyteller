import { AppNavigation } from "../../constants";
import { MenuItem } from "../../components";

import { useContext } from "react";
import MenuContext from "../../contexts/menu-context/MenuContext";

import "./Sidebar.scss";

export default function Sidebar() {
  const { isMenuVisible } = useContext(MenuContext);

  return (
    <aside
      className={`storyteller-sidebar ${
        isMenuVisible ? "sidebar-visible" : "sidebar-hidden"
      }`}
      role="menubar"
    >
      <nav role="navigation" className="nav-menu">
        <ul className="list-style-none padding-0 margin-0">
          {AppNavigation.map((item) => (
            <MenuItem key={item.path} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
