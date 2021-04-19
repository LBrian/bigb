import '@da-ui/card';
import { Section, DraculaString } from './Primitive';

const Career = () => {
  return (
    <Section align='right' title='Where I worked'>
      <da-card avatarAlt='Stackla' avatarSrc='/assets/images/stackla.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Front-end Engineer Team Lead
          </div>
          <ul className='list-disc list-inside text-left font-extralight text-sm'>
            <li>1st &#x1F1E6;&#x1F1FA; oversea job offer</li>
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
        avatarAlt='tradeledger'
        avatarSrc='/assets/images/tradeledger.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Senior React Front-end Engineer
          </div>
          <ul className='list-disc list-inside text-left font-extralight text-sm'>
            <li>
              <span>Initiated Apollo GraphQL Subscription</span>
              <DraculaString className='mx-1'>WebSocket</DraculaString>
              <span>projects</span>
            </li>
            <li>Boosted app performance 50%</li>
            <li>Established Dev standards and docs</li>
            <li>Established Friday Lego time &#x1F4A1;</li>
            <li>Established code quality first culture</li>
          </ul>
        </div>
      </da-card>
      <da-card avatarAlt='line' avatarSrc='/assets/images/line.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Front-end Engineer
          </div>
          <ul className='list-disc list-inside text-left font-extralight text-sm'>
            <li>1st &#x1F1EF;&#x1F1F5; oversea job offer</li>
            <li>
              <span>Hello to</span>
              <DraculaString className='mx-1'>Knokout.js</DraculaString>
              <span>and</span>
              <DraculaString className='mx-1'>Backbone.js</DraculaString>
            </li>
            <li>Kaggle Machine Learning tech sharing</li>
            <li>I can speak some Japanese</li>
          </ul>
        </div>
      </da-card>
      <da-card avatarAlt='formac' avatarSrc='/assets/images/formac.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Senior Full-stack Engineer
          </div>
          <ul className='list-disc list-inside text-left font-extralight text-sm'>
            <li>1st &#x1F1EC;&#x1F1E7; oversea job offer</li>
            <li>Career turning point to front-end</li>
            <li>Data analysis in python</li>
            <li>
              <span>Hello to</span>
              <DraculaString className='mx-1'>Angular.js</DraculaString>
            </li>
          </ul>
        </div>
      </da-card>
      <da-card avatarAlt='yahoo' avatarSrc='/assets/images/yahoo.png'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Senior Software Engineer
          </div>
          <ul className='list-disc list-inside text-left font-extralight text-sm'>
            <li>
              <span>Hello to</span>
              <DraculaString className='mx-1'>Java</DraculaString>
            </li>
            <li>Yahoo e-commerce search engine</li>
            <li>Search engine + ML models</li>
            <li>Round-robin scrum master</li>
            <li>My first US IP/PATENT submissions</li>
          </ul>
        </div>
      </da-card>
      <da-card avatarAlt='trendmicro' avatarSrc='/assets/images/trendmicro.jpg'>
        <div className='p-8 w-full'>
          <div className='filter-drop-shadow text-center text-xl mb-6'>
            Senior Software Engineer in Test
          </div>
          <ul className='list-disc list-inside text-left font-extralight text-sm'>
            <li>Cisco IoT projects</li>
            <li>In-house test framework TMSTAF</li>
            <li>
              <span>Hello to</span>
              <DraculaString className='mx-1'>Python</DraculaString>
              <span>and</span>
              <DraculaString className='mx-1'>Selenium</DraculaString>
            </li>
            <li>Automation coverage 96%</li>
          </ul>
        </div>
      </da-card>
    </Section>
  );
};

export default Career;
