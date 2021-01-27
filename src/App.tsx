import 'particles.js';
import { useEffect } from 'preact/compat';

import './index.css';
import { Intro, Career } from 'Components';
import { Header, Footer, Content } from 'Layout';

import AppContextProvider from './AppContextProvider';

const App = () => {
  useEffect(() => {
    // @ts-ignore
    window.particlesJS('bg-particles', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 700
          }
        },
        color: {
          value: '#6272a4'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#6272a4'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 0.1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          color: '#6272a4'
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div id='app' className='relative'>
      <AppContextProvider>
        <div
          id='bg-particles'
          className='absolute w-full h-full top-0 left-0'
        />
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
