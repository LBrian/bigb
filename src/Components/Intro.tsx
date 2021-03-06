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
  FadeVisibility
} from './Primitive';

const Intro: FC<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const badges = [
    {
      href: 'https://www.youracclaim.com/users/brian-yueh-peng-liu',
      alt: 'OpenJS Foundation member',
      image: 'openjs-foundation-javascriptlandia.jpg'
    },
    {
      href: 'https://github.com/blitz-js/blitz#contributors-',
      alt: 'blitz.js contributor',
      image: 'blitzjs.png'
    },
    {
      href: 'https://github.com/redwoodjs/redwood#all-contributors',
      alt: 'RedwoodJS contributor',
      image: 'redwood.svg'
    },
    {
      href: 'https://www.webcomponents.org/author/LBrian',
      alt: 'webcomponents contributor',
      image: 'webcomponent-192x192.png'
    },
    {
      href: '',
      alt: 'preact',
      image: 'preact.png'
    },
    {
      href: 'https://stackla.com/',
      alt: 'Stackla UGC',
      image: 'react.jpg'
    },
    {
      href: '',
      alt: 'vanillajs',
      image: 'vanillajs.png'
    },
    {
      href:
        'https://chrome.google.com/webstore/detail/stackla/coiffdkoeimkhbfobbbddndmnkjeefbe?hl=en',
      alt: 'Stackla Chrome Extension',
      image: 'chrome.png'
    },
    {
      href: 'https://da-ui.brianypliu.com/',
      alt: 'Svelte open-source project',
      image: 'svelte.png'
    }
  ];

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

      <div className='md:max-w-2xl text-justify font-light md:text-lg mockup-code shadow-xl'>
        <pre data-prefix='~' className='text-sm'>
          echo $email
        </pre>
        <pre data-prefix='>' className='text-sm text-neon-blue underline'>
          ralphbliu@gmail.com
        </pre>
        <pre data-prefix='~' className='text-sm' />
        <pre data-prefix='~' className='text-sm'>
          echo $whoami
        </pre>
        <pre data-prefix='>' className='text-sm text-purple'>
          Snr Software Engineer
        </pre>
        <pre data-prefix='~' className='text-sm' />
        <pre data-prefix='~' className='text-sm'>
          echo $location
        </pre>
        <pre data-prefix='>' className='text-sm text-pink'>
          Sydney, NSW, Australia &#129432;
        </pre>
        <pre data-prefix='~' className='text-sm' />
        <pre data-prefix='~' className='text-sm'>
          echo $passions
        </pre>
        <pre data-prefix='>' className='text-sm text-green'>
          Javascript and Web technologies
        </pre>
        <pre data-prefix='~' className='text-sm' />
        <pre data-prefix='~' className='text-sm'>
          echo $experience
        </pre>
        <pre data-prefix='>' className='text-sm text-yellow'>
          Front-end Developer
        </pre>
        <pre data-prefix='>' className='text-sm text-yellow'>
          Backend Developer
        </pre>
        <pre data-prefix='>' className='text-sm text-yellow'>
          Data Mining (academic)
        </pre>
        <pre data-prefix='>' className='text-sm text-yellow'>
          Software Engineer
        </pre>
        <pre data-prefix='>' className='text-sm text-yellow'>
          Software Engineer in Test
        </pre>
        <pre data-prefix='>' className='text-sm text-yellow'>
          Linux System Admin
        </pre>
      </div>
      <FadeVisibility className='mt-20 text-center md:text-left'>
        <div className='b-avatar'>
          <img
            width={280}
            height={280}
            loading='lazy'
            src='/assets/images/avatar.png'
            alt='Brian Liu avatar'
            className='duration-500'
          />
          {badges.map(({ alt, image, href }) => (
            <a target='_blank' rel='noreferrer' href={href}>
              <img
                width={60}
                height={60}
                loading='lazy'
                alt={alt}
                className='b-avatar-badge'
                src={`/assets/images/${image}`}
              />
            </a>
          ))}
        </div>
      </FadeVisibility>
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
