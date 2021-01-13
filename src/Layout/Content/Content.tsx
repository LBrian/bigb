import React from 'react';

import Intro from './Intro';
import Career from './Career';
import Portfolio from './Portfolio';

const Content = () => {
  return (
    <div className='py-20 px-4 sm:px-14 md:px-32 lg:px-48 xl:px-64 font-sans'>
      <Intro />
      <Career />
      <Portfolio />
    </div>
  );
};

export default Content;
