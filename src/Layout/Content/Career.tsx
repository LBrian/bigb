import React from 'react';

import { Card, Section, ShieldsBadges } from 'Components';

const Career = () => {
  return (
    <Section align='right' title='Where I worked'>
      <div className='flex gap-8 flex-wrap md:flex-row-reverse'>
        <Card
          title='Senior Software Engineer'
          imageSrc='yahoo.png'
          bgColor='bg-purple'>
          ● Scrum master and develop e-Commerce search API – Core Java CI and
          release management - Jenkins (yHudson), IGOR (in-house Puppet) ●
          Optimise e-Commerce search API – Jmeter, Fiddler, PRTG
        </Card>
        <Card
          title='Senior Software Engineer in Test'
          imageSrc='trendmicro.jpg'
          bgColor='bg-red'>
          ● 6 projects experience, coordinate global projects experience (UK, US
          and China) and relocated to UK 4 months ● Safesync, cloud storage
          service – Perl, MogileFS, Gearman, Ubuntu Linux ● TMSTAF, customise
          automation test framework based on STAF – Python, STAF ● Test
          automation, performance optimization and test planning- Python,
          Jmeter, Fiddler
        </Card>
        <Card title='Front-end Engineer' imageSrc='line.png'>
          ● LINE Part-time job service - Javascript ES6, Backbone, Knockout ●
          LINE Career campaign
        </Card>
        <Card title='Front-end Engineer Team Lead' imageSrc='stackla.png'>
          ● Stackla Admin portal - Javascript ES6, React, React Hook,
          Typescript, jQuery, TailwindCSS, Mustache, styled-components ● Stackla
          Chrome Extension - Javascript ES6, React, Chrome Extension APIs ●
          Stackla UI Kit - Javascript ES6, React, React Hook, Typescript,
          TailwindCSS, styled-components
        </Card>
        <Card
          title='Senior React Front-end Engineer'
          imageSrc='tradeledger.jpg'>
          ● Back Office/Customer/Broker portals - Javascript ES6, React, React
          Hook, GraphQL (Apollo), GraphQL Subscription (WebSocket), Typescript,
          styled-components, styled-system
        </Card>
        <Card title='Senior Full-stack Engineer' imageSrc='formac.png'>
          ● Design and develop ultimetrics sample/response/edge – Javascript,
          AngularJS ● Develop ultimetrics v1.0 backend test automation – Python,
          pytest ● Maintain the existing application, Telgas - Javascript,
          AmChart
        </Card>
      </div>
    </Section>
  );
};

export default Career;
