import React from 'react';
import { useEffect, useState } from 'preact/hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Content, Header } from 'Layout';

const LOCAL_STORAGE_KEYS = {
  darkMode: 'bigb/darkMode'
};

const AppContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

const App = () => {
  const prevDarkMode =
    localStorage.getItem(LOCAL_STORAGE_KEYS.darkMode) ?? true;
  const [darkMode, setDarkMode] = useState<boolean>(Boolean(prevDarkMode));

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
      <div className='flex-1'>
        <Header />
        <Router>
          <Switch>
            <Route path='/:topic?'>
              <Content />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
};

export { App as default, AppContext };
