import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Bitcoin from '../components/Bitcoins';
import Payments from '../components/Payments';
import Benefits from '../components/Benefits';
import Number from '../components/Number';
import HowItWorks from '../components/HowItWorks';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <HomeHero />
        <Bitcoin />
        <Payments />
        <Benefits />
        <Number />
        <HowItWorks />
      </Layout>
    );
  }
}
