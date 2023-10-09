import { useState } from "react";

import MenuContext from "./MenuContext";

const MenuContextProvider = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisible = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <MenuContext.Provider value={{ isMenuVisible, toggleMenuVisible }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
