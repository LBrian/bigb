import { h } from 'preact';
import { useState, useEffect, createContext, FC } from 'preact/compat';

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
