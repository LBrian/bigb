import type { ComponentChildren } from 'preact';
import { useState, useEffect, createContext } from 'preact/compat';

const LOCAL_STORAGE_KEYS = {
  darkMode: 'bigb/darkMode'
};

const AppContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

type AppContextProviderProps = {
  children: ComponentChildren;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
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
