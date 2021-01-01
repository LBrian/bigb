import React from 'react';

import { Card, Section, ShieldsBadges } from 'Components';

const Career = () => {
  return (
    <Section align='right' title='Where I worked'>
      <div className='cards'>
        <Card
          title='Senior Software Engineer'
          imageSrc='yahoo.png'
          bgColor='bg-purple'>
          <ShieldsBadges
            className='mb-2'
            badges={[
              { label: 'Java', value: 'n/a', color: 'blue' },
              { label: 'igor', value: 'in house', color: 'blue' },
              { label: 'yHudson', value: 'in house', color: 'blue' },
              { label: 'scrum master', value: '10%', color: 'success' },
              { label: 'developer', value: '90%', color: 'success' }
            ]}
          />
          <ul className='list-disc list-inside text-left'>
            <li>Yahoo e-commerce search engine team</li>
            <li>Integrated machine learning models with search engine</li>
            <li>Round-robin scrum master</li>
          </ul>
        </Card>
        <Card title='Front-end Engineer Team Lead' imageSrc='stackla.png'>
          <ShieldsBadges
            className='mb-2'
            badges={[
              { label: 'react', value: '16.9.0', color: 'blue' },
              { label: 'typescript', value: '3.4.3', color: 'blue' },
              { label: 'react apollo', value: '2.5.4', color: 'blue' },
              { label: 'redux', value: '4.0.1', color: 'blue' },
              { label: 'rxjs', value: '6.3.3', color: 'blue' },
              { label: 'apollo client', value: '2.5.1', color: 'blue' },
              { label: 'jquery', value: '2.1.4', color: 'blue' },
              { label: 'tailwindcss', value: '1.0.4', color: 'blue' },
              { label: 'developer', value: '70%', color: 'success' },
              {
                label: 'team lead',
                value: '30%',
                color: 'success'
              }
            ]}
          />
          <ul className='list-disc list-inside text-left'>
            <li>1st &#x1F1E6;&#x1F1FA; oversea job offer</li>
            <li>&#9883; ReactConf AU 2020</li>
            <li>
              Stackla Chrome Extension
              <span className='italic ml-2 font-semibold align-text-top text-xs'>
                Greenfield
              </span>
            </li>
            <li>Stackla Design System</li>
          </ul>
        </Card>
        <Card title='Front-end Engineer' imageSrc='line.png'>
          <ShieldsBadges
            className='mb-2'
            badges={[
              { label: 'backbone.js', value: '1.4.0', color: 'blue' },
              { label: 'knockout.js', value: '3.4.2', color: 'blue' },
              { label: 'javascript', value: 'es6', color: 'blue' },
              { label: 'developer', value: '100%', color: 'success' }
            ]}
          />
          <ul className='list-disc list-inside text-left'>
            <li>1st &#x1F1EF;&#x1F1F5; oversea job offer</li>
            <li>Kaggle Machine Learning tech sharing</li>
            <li>Acquired Japanese language</li>
          </ul>
        </Card>
        <Card
          title='Senior React Front-end Engineer'
          imageSrc='tradeledger.jpg'>
          <ShieldsBadges
            className='mb-2'
            badges={[
              { label: 'react', value: '16.14.0', color: 'blue' },
              { label: 'typescript', value: '3.9.7', color: 'blue' },
              { label: 'graphql', value: '14.5.8', color: 'blue' },
              {
                label: 'subscriptions transport ws',
                value: '0.9.8',
                color: 'blue'
              },
              { label: 'apollo client', value: '3.1.4', color: 'blue' },
              { label: 'apollo', value: '2.30.2', color: 'blue' },
              {
                label: 'graphql codegen',
                value: '1.17.9',
                color: 'blue'
              },
              { label: 'developer', value: '100%', color: 'success' }
            ]}
          />
          <ul className='list-disc list-inside text-left'>
            <li>Friday arvo Lego time &#x1F4A1;</li>
            <li>Boosted page performance 50%</li>
            <li>Established Dev standards and docs</li>
          </ul>
        </Card>
        <Card
          title='Senior Software Engineer in Test'
          imageSrc='trendmicro.jpg'
          bgColor='bg-red'>
          <ShieldsBadges
            className='mb-2'
            badges={[
              { label: 'python', value: 'n/a', color: 'blue' },
              { label: 'ubuntu', value: 'n/a', color: 'blue' },
              { label: 'selenium', value: 'n/a', color: 'blue' },
              { label: 'team lead', value: '20%', color: 'success' },
              { label: 'test developer', value: '80%', color: 'success' }
            ]}
          />
          <ul className='list-disc list-inside text-left'>
            <li>Early IoT concept project security in router</li>
            <li>In-house test framework TMSTAF based on STAF by IBM</li>
          </ul>
        </Card>
        <Card title='Senior Full-stack Engineer' imageSrc='formac.png'>
          <ShieldsBadges
            className='mb-2'
            badges={[
              { label: 'angular', value: '1.2.28', color: 'blue' },
              { label: 'jquery', value: '2.1.1', color: 'blue' },
              { label: 'angular bootstrap', value: '0.12.0', color: 'blue' },
              { label: 'bootstrap', value: '3.3.0', color: 'blue' },
              { label: 'developer', value: '100%', color: 'success' }
            ]}
          />
          <ul className='list-disc list-inside text-left'>
            <li>1st &#x1F1EC;&#x1F1E7; oversea job offer</li>
            <li>Career turning point to front-end</li>
            <li>Data analysis in python</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default Career;
