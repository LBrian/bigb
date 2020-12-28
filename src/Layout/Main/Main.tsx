import React from 'react';

interface MainProps {}

const Main = (props: MainProps) => {
  return (
    <div className='text-center py-20'>
      <div className='mb-8'>
        <img
          src='avatar.png'
          alt='brian'
          className='m-auto'
          height={240}
          width={240}
        />
      </div>
      <wired-card
        fill='inherit'
        elevation={6}
        className='p-8 mx-8 sm:w-80 sm:mx-auto font-semibold relative'>
        Hello, I&apos;m Brian. I love Javascript and everything frontend.
      </wired-card>
    </div>
  );
};

export default Main;
