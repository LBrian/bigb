import React from 'react';
import { useParams } from 'react-router-dom';
import { RouterParams } from 'types';

import Intro from './Intro';
import Career from './Career';

const Content = () => {
  const { topic } = useParams<RouterParams>();

  return (
    <div className='py-20 px-6 sm:px-14 md:px-32 lg:px-48 xl:px-64 font-sans'>
      <Intro />
      <Career />
    </div>
  );
};

export default Content;
