import React from 'react';
import 'wired-elements';
import { useEffect, useState } from 'preact/hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Main, Header } from 'Layout';

const LOCAL_STORAGE_KEYS = {
  darkMode: 'bigb/darkMode',
};

const AppContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    Boolean(localStorage.getItem(LOCAL_STORAGE_KEYS.darkMode))
  );

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
        },
      }}>
      <div>
        <div className='flex-1 overflow-y-auto'>
          <Header />
          <Router>
            <Switch>
              <Route path='/'>
                <Main />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export { App as default, AppContext };
