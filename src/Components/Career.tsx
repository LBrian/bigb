import '@da-ui/card';
import { useMemo, useEffect, useState, useContext } from 'preact/hooks';

import { AppContext } from 'AppContextProvider';

import { Section, DraculaString, DraculaNumber, Countdown } from './Primitive';

const Career = () => {
  const careerStart = new Date('2005-05-01T00:00:00Z');
  const [current, setCurrent] = useState(
    new Date(Date.now() - careerStart.getTime())
  );
  const { darkMode } = useContext(AppContext);
  const listClasses = useMemo(
    () =>
      `list-disc list-inside text-left font-extralight text-sm${
        !darkMode ? ' text-dark-teal' : ''
      }`,
    [darkMode]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(new Date(Date.now() - careerStart.getTime()));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Section align='right' title='Where I worked'>
      <div className='grid grid-flow-col gap-1 sm:gap-4 text-center auto-cols-max pb-10 justify-start md:justify-end'>
        <Countdown
          label='yrs'
          value={Math.abs(current.getUTCFullYear() - 1970)}
        />
        <Countdown label='mon' value={current.getMonth()} />
        <Countdown label='day' value={current.getDay()} />
        <Countdown label='hrs' value={current.getHours()} />
        <Countdown label='min' value={current.getMinutes()} />
        <Countdown label='sec' value={current.getSeconds()} />
      </div>
      <da-card
        width='380px'
        avatarAlt='SafetyCulture'
        avatarSrc='/assets/images/safetyculture.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            EdApp Snr Front-end Engineer &#x1F1E6;&#x1F1FA;
          </div>
          <ul className={listClasses}>
            <li>&#9883; React Summit 2021</li>
            <li>
              <DraculaString className='mx-1'>coffeescript</DraculaString>bundle
              size
              <DraculaNumber
                value={45}
                className='mx-1'
                options={{ style: 'unit', unit: 'percent' }}
              />
              &#x2B07;
            </li>
            <li>
              <DraculaString className='mx-1'>HTML</DraculaString>document
              response time
              <DraculaNumber
                value={50}
                className='mx-1'
                options={{ style: 'unit', unit: 'percent' }}
              />
              &#x2B07;
            </li>
            <li>
              <DraculaString className='mx-1'>DOMContentLoad</DraculaString>
              load time
              <DraculaNumber
                value={60}
                className='mx-1'
                options={{ style: 'unit', unit: 'percent' }}
              />
              &#x2B07;
            </li>
            <li>Refactored/deprecated DS components</li>
            <li>
              POC
              <DraculaString className='mx-1'>Preact</DraculaString>to reduce
              migration
              <DraculaNumber
                value={15}
                className='mx-1'
                options={{ style: 'unit', unit: 'percent' }}
              />
              &#x2B07;
            </li>
          </ul>
        </div>
      </da-card>
      <da-card
        width='380px'
        avatarAlt='Stackla'
        avatarSrc='/assets/images/stackla.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Front-end Engineer Team Lead &#x1F1E6;&#x1F1FA;
          </div>
          <ul className={listClasses}>
            <li>&#9883; ReactConf AU 2020</li>
            <li>
              <span>Stackla Chrome Extension</span>
              <span className='italic ml-2 font-semibold align-text-top text-xs'>
                Greenfield
              </span>
            </li>
            <li>Stackla Design System</li>
            <li>
              <span>Initiated</span>
              <DraculaString className='mx-1'>TailwindCSS</DraculaString>
              <span>v1 integration</span>
            </li>
          </ul>
        </div>
      </da-card>
      <da-card
        width='380px'
        avatarAlt='tradeledger'
        avatarSrc='/assets/images/tradeledger.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Snr React Front-end Engineer &#x1F1E6;&#x1F1FA;
          </div>
          <ul className={listClasses}>
            <li>
              Web app performance
              <DraculaNumber
                value={60}
                className='mx-1'
                options={{ style: 'unit', unit: 'percent' }}
              />
              &#x2B06;
            </li>
            <li>Established Dev standards and docs</li>
            <li>Established code quality first culture</li>
            <li>Initiated Friday Lego (Innovation) time &#x1F4A1;</li>
            <li>
              <span>
                Built real-time web app by Apollo GraphQL Subscription
              </span>
              <DraculaString className='mx-1'>(WebSocket)</DraculaString>
            </li>
          </ul>
        </div>
      </da-card>
      <da-card
        width='380px'
        avatarAlt='line'
        avatarSrc='/assets/images/line.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Front-end Engineer &#x1F1EF;&#x1F1F5;
          </div>
          <ul className={listClasses}>
            <li>In-app webview projects</li>
            <li>Kaggle Machine Learning tech sharing</li>
            <li>
              &#x1F644; &#x1F635;
              <DraculaString className='mx-1'>Knokout.js</DraculaString>
              <span>and</span>
              <DraculaString className='mx-1'>Backbone.js</DraculaString>
            </li>
            <li>Upside is I learnt Japanese</li>
          </ul>
        </div>
      </da-card>
      <da-card
        width='380px'
        avatarAlt='formac'
        avatarSrc='/assets/images/formac.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Snr Full-stack Engineer &#x1F1EC;&#x1F1E7;
          </div>
          <ul className={listClasses}>
            <li>Career turning point to Front-end</li>
            <li>
              Data mining in
              <DraculaString className='mx-1'>Python</DraculaString>
            </li>
            <li>
              My first project in
              <DraculaString className='mx-1'>Angular.js</DraculaString>
            </li>
          </ul>
        </div>
      </da-card>
      <da-card
        width='380px'
        avatarAlt='yahoo'
        avatarSrc='/assets/images/yahoo.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Snr Software Engineer &#x1F1F9;&#x1F1FC;
          </div>
          <ul className={listClasses}>
            <li>
              Yahoo e-commerce search engine in
              <DraculaString className='mx-1'>Java</DraculaString>
            </li>
            <li>ML models integration</li>
            <li>Scrum master, TDD</li>
            <li>My first US IP/PATENT submissions</li>
          </ul>
        </div>
      </da-card>
      <da-card
        width='380px'
        avatarAlt='trendmicro'
        avatarSrc='/assets/images/trendmicro.jpg'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Snr Software Engineer in Test &#x1F1F9;&#x1F1FC;
          </div>
          <ul className={listClasses}>
            <li>
              Cisco<DraculaString className='mx-1'>IoT</DraculaString>projects
            </li>
            <li>
              In-house test framework
              <DraculaString className='mx-1'>TMSTAF</DraculaString>
            </li>
            <li>
              <span>Hello to</span>
              <DraculaString className='mx-1'>Python</DraculaString>
              <span>and</span>
              <DraculaString className='mx-1'>Selenium</DraculaString>
            </li>
            <li>
              Automation coverage{' '}
              <DraculaNumber
                value={96}
                className='mx-1'
                options={{ style: 'unit', unit: 'percent' }}
              />
            </li>
          </ul>
        </div>
      </da-card>
    </Section>
  );
};

export default Career;
