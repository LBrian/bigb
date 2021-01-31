import { h } from 'preact';
import { useState, useEffect, createContext, FC } from 'preact/compat';

import { notification } from './utils';

const LOCAL_STORAGE_KEYS = {
  darkMode: 'bigb/darkMode'
};

const AppContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

const AppContextProvider: FC = ({ children }) => {
  const prevDarkMode =
    localStorage.getItem(LOCAL_STORAGE_KEYS.darkMode) ?? true;
  const [darkMode, setDarkMode] = useState(Boolean(prevDarkMode));

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration) {
          registration.addEventListener('updatefound', () => {
            notification(
              'New updates!',
              'Brian Liu just released new stuffs on his website, go explore it and feedback is welcome.'
            );
          });
        }
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => {
          setDarkMode(!darkMode);
          localStorage.setItem(
            LOCAL_STORAGE_KEYS.darkMode,
            !darkMode ? '1' : ''
          );
        }
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider as default, AppContext };
