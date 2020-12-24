import React from "react";
import { useContext } from "preact/hooks";

import { AppContext } from "App";

interface HeaderProps {}

const Header = (prop: HeaderProps) => {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <header className="h-16 sticky shadow-lg sm:px-6 flex items-center font-sans">
      <div className="flex-1 text-xl font-bold whitespace-nowrap text-center sm:text-left">
        Brian Yueh-Peng Liu
      </div>
      <wired-toggle checked={darkMode} onchange={toggleDarkMode} />
    </header>
  );
};

export default Header;
