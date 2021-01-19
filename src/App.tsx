// import { Router } from 'preact-router';
import './index.css';
import { Header, Footer, Intro, Career } from 'components';

import AppContextProvider from './AppContextProvider';

const App = () => (
  <div id='app'>
    <AppContextProvider>
      <Header />
      <div className='py-20 px-4 sm:px-14 md:px-32 lg:px-48 xl:px-64 font-sans'>
        <Intro />
        <Career />
      </div>
      <Footer />
    </AppContextProvider>
  </div>
);

export default App;
