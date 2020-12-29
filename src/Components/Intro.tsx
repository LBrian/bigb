import React, { HTMLAttributes } from 'react';
import { useContext } from 'preact/hooks';

import { AppContext } from 'App';

const Intro = (props: HTMLAttributes<HTMLDivElement>) => {
  const { darkMode } = useContext(AppContext);
  const careerStart = new Date('2005-05-01T00:00:00Z');
  const careerTimePeriod = new Date(
    new Date().getTime() - careerStart.getTime()
  );
  const years = careerTimePeriod.getFullYear() - 1971;

  return (
    <div {...props}>
      <div
        className={`font-vt323 pb-6 text-xl sm:text-2xl ${
          darkMode ? 'text-green' : 'text-pink'
        }`}>
        Hi, my name is
      </div>
      <div className='text-5xl xl:text-7xl font-extrabold text-blue-gray sm:pb-2'>
        <span className='mr-4'>Brian</span>
        <span className='mr-4 hidden sm:inline'>Yueh-Peng</span>
        <span>Liu</span>.
      </div>
      <div className='text-lg sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-blue-gray opacity-50 pb-4'>
        I love building web application in Javascript.
      </div>
      <div
        className={`text-sm font-light max-w-lg text-justify ${
          darkMode ? 'text-green' : 'text-pink'
        }`}>
        I&apos;m a senior Front-End Engineer based in Sydney, NSW, Australia
        &#129432;. {years} years professional experience in software across the
        continents shaped me with unique soft/hard skills and broaden vision.
        From Linux Sys Admin, SD, SDET, Back-End Developer and Data Mining
        academic level, now I specifically love Javascript and wanna stick with
        it for a while.
      </div>
    </div>
  );
};

export default Intro;
