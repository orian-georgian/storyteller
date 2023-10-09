import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as QuestionMark } from "../../assets/icons/question-mark.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

import { useContext } from "react";
import MenuContext from "../../contexts/menu-context/MenuContext";

import useDisplay from "../../hooks/useDisplay";

import Button from "../button/Button";

import "./Header.scss";

function UserAvatar() {
  return (
    <div className="user-avatar flex-box justify-center align-center">RJ</div>
  );
}

export default function Header() {
  const { isMenuVisible, toggleMenuVisible } = useContext(MenuContext);
  const { isSmallView } = useDisplay();

  return (
    <header className="storyteller-header flex-box align-center" role="banner">
      {isSmallView && (
        <Button
          type="text"
          icon={
            isMenuVisible ? (
              <Close width={24} height={24} />
            ) : (
              <Menu width={24} height={24} />
            )
          }
          onClick={toggleMenuVisible}
        />
      )}
      <Logo />
      <QuestionMark className="ml-auto" />
      <UserAvatar />
    </header>
  );
}
