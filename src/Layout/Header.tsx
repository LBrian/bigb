import 'wired-toggle';
import React from 'preact';
import { useContext } from 'preact/hooks';

import { AppContext } from 'App';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <header className='h-16 sticky top-0 shadow-lg pl-4 sm:pl-6  pr-6 sm:pr-8 flex items-center font-sans z-10'>
      <div className='flex-1 text-left'>
        <img
          alt='bigb'
          width={52}
          height={52}
          loading='lazy'
          src='apple-icon-180.png'
        />
      </div>
      <wired-toggle checked={darkMode} onchange={toggleDarkMode} />
    </header>
  );
};

export default Header;
