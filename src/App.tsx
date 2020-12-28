import React from 'react';
import 'wired-elements';
import { useState } from 'preact/hooks';
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
      <Router>
        <div
          className={`flex flex-col ${
            darkMode ? 'bg-blue-gray text-white' : 'text-blue-gray'
          }`}>
          <Header />
          <div className='flex-1'>
            <Switch>
              <Route path='/'>
                <Main />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export { App as default, AppContext };
