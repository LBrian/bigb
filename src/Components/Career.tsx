import { Card, Section, DraculaString } from './Primitive';

const Career = () => {
  return (
    <Section align='right' title='Where I worked'>
      <div className='cards'>
        <Card
          title='Front-end Engineer Team Lead'
          imageSrc='/assets/images/stackla.png'>
          <ul className='list-disc list-inside text-left'>
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
        </Card>
        <Card
          title='Senior React Front-end Engineer'
          imageSrc='/assets/images/tradeledger.png'>
          <ul className='list-disc list-inside text-left'>
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
        </Card>
        <Card title='Front-end Engineer' imageSrc='/assets/images/line.png'>
          <ul className='list-disc list-inside text-left'>
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
        </Card>
        <Card
          title='Senior Full-stack Engineer'
          imageSrc='/assets/images/formac.png'>
          <ul className='list-disc list-inside text-left'>
            <li>1st &#x1F1EC;&#x1F1E7; oversea job offer</li>
            <li>Career turning point to front-end</li>
            <li>Data analysis in python</li>
            <li>
              <span>Hello to</span>
              <DraculaString className='mx-1'>Angular.js</DraculaString>
            </li>
          </ul>
        </Card>
        <Card
          title='Senior Software Engineer'
          imageSrc='/assets/images/yahoo.png'>
          <ul className='list-disc list-inside text-left'>
            <li>
              <span>Hello to</span>
              <DraculaString className='mx-1'>Java</DraculaString>
            </li>
            <li>Yahoo e-commerce search engine</li>
            <li>Search engine + ML models</li>
            <li>Round-robin scrum master</li>
            <li>My first US IP/PATENT submissions</li>
          </ul>
        </Card>
        <Card
          title='Senior Software Engineer in Test'
          imageSrc='/assets/images/trendmicro.jpg'>
          <ul className='list-disc list-inside text-left'>
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
        </Card>
      </div>
    </Section>
  );
};

export default Career;
