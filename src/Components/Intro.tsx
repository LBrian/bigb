import type { FC, JSX } from 'preact/compat';

import {
  IconNpm,
  IconMozilla,
  IconGithub,
  IconMedium,
  IconReddit,
  IconTwitter,
  IconLinkedin,
  DraculaName,
  DraculaString,
  DraculaNumber
} from './Primitive';

const Intro: FC<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const careerStart = new Date('2005-05-01T00:00:00Z');
  const careerTimePeriod = new Date(
    new Date().getTime() - careerStart.getTime()
  );
  const years = careerTimePeriod.getFullYear() - 1971;

  return (
    <div {...props}>
      <div className='font-vt323 pb-4 text-3xl text-pink'>Hi, my name is</div>
      <div className='text-5xl xl:text-7xl font-extrabold pb-2'>
        <DraculaName className='mr-4'>Brian</DraculaName>
        <DraculaName className='mr-4 hidden sm:inline'>Yueh-Peng</DraculaName>
        <DraculaName>Liu.</DraculaName>
      </div>
      <div className='text-3xl lg:text-4xl xl:text-5xl font-bold opacity-50 pb-10'>
        <DraculaName>
          I love building web applications from Javascript.
        </DraculaName>
      </div>
      <div className='md:max-w-2xl text-justify font-light md:text-lg'>
        <DraculaString>
          I&apos;m a senior Front-End Engineer based in Sydney, NSW, Australia
          &#129432;. <DraculaNumber value={years} /> years professional
          experience in software across the continents shaped me with unique
          soft/hard skills and broaden vision. From Linux Sys Admin, SD, SDET,
          Back-End Developer and Data Mining academic level, now I specifically
          love building web applications.
        </DraculaString>
      </div>
      <div className='mt-20 text-center md:text-left'>
        <div className='avatar'>
          <img
            width={280}
            height={280}
            loading='lazy'
            src='/assets/images/avatar.png'
            alt='Brian Liu avatar'
            className='duration-500'
          />
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.youracclaim.com/users/brian-yueh-peng-liu'>
            <img
              width={60}
              height={60}
              loading='lazy'
              alt='jslandia'
              className='avatar-badge'
              src='/assets/images/openjs-foundation-javascriptlandia.png'
            />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/LBrian/brian-karina'>
            <img
              width={60}
              height={60}
              loading='lazy'
              alt='blitzjs'
              className='avatar-badge'
              src='/assets/images/blitzjs.png'
            />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.webcomponents.org/author/LBrian'>
            <img
              width={60}
              height={60}
              loading='lazy'
              alt='webcomponent'
              className='avatar-badge'
              src='/assets/images/webcomponent-192x192.png'
            />
          </a>
        </div>
      </div>
      <div className='social-media'>
        <IconNpm href='https://www.npmjs.com/~ralphbliu' />
        <IconGithub href='https://github.com/LBrian' />
        <IconMedium href='https://ralphbliu.medium.com/' />
        <IconReddit href='https://www.reddit.com/user/bigbliu' />
        <IconTwitter href='https://twitter.com/ralphbliu' />
        <IconLinkedin href='https://www.linkedin.com/in/brianyliu/' />
        <IconMozilla href='https://developer.mozilla.org/en-US/profiles/LBrian' />
      </div>
    </div>
  );
};

export default Intro;
