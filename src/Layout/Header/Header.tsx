import React from 'preact';
import { useContext } from 'preact/hooks';

import { Name } from 'Components';
import { AppContext } from 'App';

interface HeaderProps {}

const Header = (prop: HeaderProps) => {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <header className='h-16 sticky shadow-lg px-6 flex items-center font-sans'>
      <Name className='flex-1 text-lg sm:text-xl font-bold whitespace-nowrap text-left' />
      <wired-toggle checked={darkMode} onchange={toggleDarkMode} />
    </header>
  );
};

export default Header;
