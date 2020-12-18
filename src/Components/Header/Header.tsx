import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header = (prop: HeaderProps) => {
  return (
    <header className="bg-blue-gray h-16 text-white">
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
