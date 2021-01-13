import React from 'react';

import { Section, CompanyPreview } from 'Components';

const Portfolio = () => {
  return (
    <Section align='left' title='Portfolio'>
      <CompanyPreview
        title='Stackla'
        className='mb-32'
        alt='Stackla Portfolio'
        url='https://stackla.com/'
        imageSrc='/image/portfolio-stackla.png'
        description="The World's Smartest Visual Content Engine"
      />
      <CompanyPreview
        width={400}
        title='LINE'
        className='mb-32'
        alt='Line Portfolio'
        imageSrc='/image/portfolio-line.png'
        url='https://baito.line.me/lpg/service/introduction.html'
        description='LINE PART-TIME helps users find and apply to part-time jobs easily from about 100000 jobs with personalised recommendations.'
      />
      <CompanyPreview
        width={800}
        title='Yahoo!'
        className='mb-32'
        alt='Yahoo Portfolio'
        url='https://tw.buy.yahoo.com/'
        imageSrc='/image/portfolio-yahoo.png'
        description='e-commerce search engine'
      />
      <CompanyPreview
        width={600}
        className='mb-32'
        title='Trade Ledger'
        alt='Trade Ledger Portfolio'
        url='https://tradeledger.io/'
        imageSrc='/image/portfolio-tl.png'
        description='Business Finance Technology Reimagined'
      />
      <CompanyPreview
        width={600}
        title='ultimetrics'
        alt='ultimetrics Portfolio'
        url='https://ultimetrics.net/products/'
        imageSrc='/image/portfolio-ultimetrics.png'
        description='Delivering Services for Demand Side Providers'
      />
    </Section>
  );
};

export default Portfolio;
