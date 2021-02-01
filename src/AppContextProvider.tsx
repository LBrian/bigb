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

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // When a new SW is activated
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if ('Notification' in window) {
          Notification.requestPermission().then((permission) => {
            permission === 'granted' &&
              new Notification('New SW updated!', {
                vibrate: [300, 100, 400],
                icon: '/assets/favicon-196.png',
                body:
                  'A new version of Service Worker has been updated automatically.'
              });
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
