import './index.css';
import { Intro, Career } from 'Components';
import { Header, Footer, Content } from 'Layout';

import AppContextProvider from './AppContextProvider';

const App = () => {
  return (
    <div id='app'>
      <AppContextProvider>
        <Header />
        <Content>
          <Intro />
          <Career />
        </Content>
        <Footer />
      </AppContextProvider>
    </div>
  );
};

export default App;
