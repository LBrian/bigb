import React from 'preact';
import { useContext } from 'preact/hooks';

import { AppContext } from 'App';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <header className='h-16 sticky top-0 shadow-lg px-6 flex items-center font-sans z-10'>
      <div className='flex-1 text-left'>
        <img
          alt='bigb'
          width={42}
          height={42}
          loading='lazy'
          src='apple-touch-icon.png'
        />
      </div>
      <wired-toggle checked={darkMode} onchange={toggleDarkMode} />
    </header>
  );
};

export default Header;
