import React from "react";

interface HeaderProps {}

const Header = (prop: HeaderProps) => {
  return (
    <header className="h-16 sticky shadow-lg px-6 flex items-center font-sans">
      <div className="flex-1 text-xl font-bold whitespace-nowrap text-center sm:text-left">
        Brian Yueh-Peng Liu
      </div>
    </header>
  );
};

export default Header;
