import "./MenuItem.scss";

import { useLocation, useNavigate } from "react-router-dom";

export default function MenuItem({ icon, text, path, isNewSection }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    navigate(path);
  }

  return (
    <>
      {isNewSection && <li className="menu-item liniar-gradient" />}
      <li
        className={`menu-item flex-box align-center ${
          path === location.pathname ? "selected" : "unselected"
        }`}
        key={path}
        onClick={handleClick}
      >
        <div className="icon flex-box align-center justify-center">
          <img src={icon} alt={text} />
        </div>
        <div>{text}</div>
      </li>
    </>
  );
}
