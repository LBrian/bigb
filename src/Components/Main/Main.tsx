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
      <wired-listbox horizontal>
        <wired-item
          name='current'
          selected
          value='current'
          className='font-semibold'>
          Senior Frontent Developer
        </wired-item>
        <wired-item name='stackla' selected={false} value='stackla'>
          Frontend Tech Lead
        </wired-item>
        <wired-item name='line' selected={false} value='line'>
          Frontend Developer
        </wired-item>
      </wired-listbox>
    </div>
  );
};

export default Main;
